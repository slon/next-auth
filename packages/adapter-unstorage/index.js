import { isDate } from "@auth/core/adapters";
export const defaultOptions = {
    baseKeyPrefix: "",
    accountKeyPrefix: "user:account:",
    accountByUserIdPrefix: "user:account:by-user-id:",
    emailKeyPrefix: "user:email:",
    sessionKeyPrefix: "user:session:",
    sessionByUserIdKeyPrefix: "user:session:by-user-id:",
    userKeyPrefix: "user:",
    verificationTokenKeyPrefix: "user:token:",
    authenticatorKeyPrefix: "authenticator:",
    authenticatorUserKeyPrefix: "authenticator:by-user-id:",
    useItemRaw: false,
};
export function hydrateDates(json) {
    return Object.entries(json).reduce((acc, [key, val]) => {
        acc[key] = isDate(val) ? new Date(val) : val;
        return acc;
    }, {});
}
export function UnstorageAdapter(storage, options = {}) {
    const mergedOptions = {
        ...defaultOptions,
        ...options,
    };
    const { baseKeyPrefix } = mergedOptions;
    const accountKeyPrefix = baseKeyPrefix + mergedOptions.accountKeyPrefix;
    const accountByUserIdPrefix = baseKeyPrefix + mergedOptions.accountByUserIdPrefix;
    const emailKeyPrefix = baseKeyPrefix + mergedOptions.emailKeyPrefix;
    const sessionKeyPrefix = baseKeyPrefix + mergedOptions.sessionKeyPrefix;
    const sessionByUserIdKeyPrefix = baseKeyPrefix + mergedOptions.sessionByUserIdKeyPrefix;
    const userKeyPrefix = baseKeyPrefix + mergedOptions.userKeyPrefix;
    const verificationTokenKeyPrefix = baseKeyPrefix + mergedOptions.verificationTokenKeyPrefix;
    const authenticatorKeyPrefix = baseKeyPrefix + mergedOptions.authenticatorKeyPrefix;
    const authenticatorUserKeyPrefix = baseKeyPrefix + mergedOptions.authenticatorUserKeyPrefix;
    async function getItem(key) {
        if (mergedOptions.useItemRaw) {
            return await storage.getItemRaw(key);
        }
        else {
            return await storage.getItem(key);
        }
    }
    async function setItem(key, value) {
        if (mergedOptions.useItemRaw) {
            return await storage.setItemRaw(key, value);
        }
        else {
            return await storage.setItem(key, value);
        }
    }
    const setObjectAsJson = async (key, obj) => {
        if (mergedOptions.useItemRaw) {
            await storage.setItemRaw(key, obj);
        }
        else {
            await storage.setItem(key, JSON.stringify(obj));
        }
    };
    const setAccount = async (id, account) => {
        const accountKey = accountKeyPrefix + id;
        await Promise.all([
            setObjectAsJson(accountKey, account),
            setItem(accountByUserIdPrefix + account.userId, accountKey),
        ]);
        return account;
    };
    const getAccount = async (id) => {
        const account = await getItem(accountKeyPrefix + id);
        if (!account)
            return null;
        return hydrateDates(account);
    };
    const setSession = async (id, session) => {
        const sessionKey = sessionKeyPrefix + id;
        await Promise.all([
            setObjectAsJson(sessionKey, session),
            setItem(sessionByUserIdKeyPrefix + session.userId, sessionKey),
        ]);
        return session;
    };
    const getSession = async (id) => {
        const session = await getItem(sessionKeyPrefix + id);
        if (!session)
            return null;
        return hydrateDates(session);
    };
    const setUser = async (id, user) => {
        await Promise.all([
            setObjectAsJson(userKeyPrefix + id, user),
            setItem(`${emailKeyPrefix}${user.email}`, id),
        ]);
        return user;
    };
    const getUser = async (id) => {
        const user = await getItem(userKeyPrefix + id);
        if (!user)
            return null;
        return hydrateDates(user);
    };
    const setAuthenticator = async (credentialId, authenticator) => {
        let newCredsToSet = [credentialId];
        const getItemReturn = await getItem(`${authenticatorUserKeyPrefix}${authenticator.userId}`);
        if (getItemReturn && getItemReturn[0] !== newCredsToSet[0]) {
            newCredsToSet.push(...getItemReturn);
        }
        await Promise.all([
            setObjectAsJson(authenticatorKeyPrefix + credentialId, authenticator),
            setItem(`${authenticatorUserKeyPrefix}${authenticator.userId}`, JSON.stringify(newCredsToSet)),
        ]);
        return authenticator;
    };
    const getAuthenticator = async (credentialId) => {
        const authenticator = await getItem(authenticatorKeyPrefix + credentialId);
        if (!authenticator)
            return null;
        return hydrateDates(authenticator);
    };
    const getAuthenticatorByUserId = async (userId) => {
        const credentialIds = await getItem(`${authenticatorUserKeyPrefix}${userId}`);
        if (!credentialIds)
            return [];
        const authenticators = [];
        for (const credentialId of credentialIds) {
            const authenticator = await getAuthenticator(credentialId);
            if (authenticator) {
                hydrateDates(authenticator);
                authenticators.push(authenticator);
            }
        }
        return authenticators;
    };
    return {
        async getAccount(providerAccountId, provider) {
            const accountId = `${provider}:${providerAccountId}`;
            const account = await getAccount(accountId);
            if (!account)
                return null;
            return account;
        },
        async createUser(user) {
            const id = crypto.randomUUID();
            return await setUser(id, { ...user, id });
        },
        getUser,
        async getUserByEmail(email) {
            const userId = await getItem(emailKeyPrefix + email);
            if (!userId) {
                return null;
            }
            return await getUser(userId);
        },
        async getUserByAccount(account) {
            const dbAccount = await getAccount(`${account.provider}:${account.providerAccountId}`);
            if (!dbAccount)
                return null;
            return await getUser(dbAccount.userId);
        },
        async updateUser(updates) {
            const userId = updates.id;
            const user = await getUser(userId);
            return await setUser(userId, { ...user, ...updates });
        },
        async linkAccount(account) {
            const id = `${account.provider}:${account.providerAccountId}`;
            return await setAccount(id, { ...account, id });
        },
        createSession: (session) => setSession(session.sessionToken, session),
        async getSessionAndUser(sessionToken) {
            const session = await getSession(sessionToken);
            if (!session)
                return null;
            const user = await getUser(session.userId);
            if (!user)
                return null;
            return { session, user };
        },
        async updateSession(updates) {
            const session = await getSession(updates.sessionToken);
            if (!session)
                return null;
            return await setSession(updates.sessionToken, { ...session, ...updates });
        },
        async deleteSession(sessionToken) {
            await storage.removeItem(sessionKeyPrefix + sessionToken);
        },
        async createVerificationToken(verificationToken) {
            await setObjectAsJson(verificationTokenKeyPrefix +
                verificationToken.identifier +
                ":" +
                verificationToken.token, verificationToken);
            return verificationToken;
        },
        async useVerificationToken(verificationToken) {
            const tokenKey = verificationTokenKeyPrefix +
                verificationToken.identifier +
                ":" +
                verificationToken.token;
            const token = await getItem(tokenKey);
            if (!token)
                return null;
            await storage.removeItem(tokenKey);
            return hydrateDates(token);
        },
        async unlinkAccount(account) {
            const id = `${account.provider}:${account.providerAccountId}`;
            const dbAccount = await getAccount(id);
            if (!dbAccount)
                return;
            const accountKey = `${accountKeyPrefix}${id}`;
            await Promise.all([
                storage.removeItem(accountKey),
                storage.removeItem(`${accountByUserIdPrefix} + ${dbAccount.userId}`),
            ]);
        },
        async deleteUser(userId) {
            const user = await getUser(userId);
            if (!user)
                return;
            const accountByUserKey = accountByUserIdPrefix + userId;
            const accountKey = await getItem(accountByUserKey);
            const sessionByUserIdKey = sessionByUserIdKeyPrefix + userId;
            const sessionKey = await getItem(sessionByUserIdKey);
            await Promise.all([
                storage.removeItem(userKeyPrefix + userId),
                storage.removeItem(`${emailKeyPrefix}${user.email}`),
                storage.removeItem(accountKey),
                storage.removeItem(accountByUserKey),
                storage.removeItem(sessionKey),
                storage.removeItem(sessionByUserIdKey),
            ]);
        },
        async createAuthenticator(authenticator) {
            await setAuthenticator(authenticator.credentialID, authenticator);
            return authenticator;
        },
        async getAuthenticator(credentialID) {
            return getAuthenticator(credentialID);
        },
        async listAuthenticatorsByUserId(userId) {
            const user = await getUser(userId);
            if (!user)
                return [];
            return getAuthenticatorByUserId(user.id);
        },
        async updateAuthenticatorCounter(credentialID, counter) {
            const authenticator = await getAuthenticator(credentialID);
            authenticator.counter = Number(counter);
            await setAuthenticator(credentialID, authenticator);
            return authenticator;
        },
    };
}
