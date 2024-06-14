/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://docs.upstash.com/redis">Upstash Redis</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://docs.upstash.com/redis">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/upstash-redis.svg" width="60"/>
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @upstash/redis @auth/upstash-redis-adapter
 * ```
 *
 * @module @auth/upstash-redis-adapter
 */
import { isDate, } from "@auth/core/adapters";
export const defaultOptions = {
    baseKeyPrefix: "",
    accountKeyPrefix: "user:account:",
    accountByUserIdPrefix: "user:account:by-user-id:",
    emailKeyPrefix: "user:email:",
    sessionKeyPrefix: "user:session:",
    sessionByUserIdKeyPrefix: "user:session:by-user-id:",
    userKeyPrefix: "user:",
    verificationTokenKeyPrefix: "user:token:",
};
export function hydrateDates(json) {
    return Object.entries(json).reduce((acc, [key, val]) => {
        acc[key] = isDate(val) ? new Date(val) : val;
        return acc;
    }, {});
}
export function UpstashRedisAdapter(client, options = {}) {
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
    const setObjectAsJson = async (key, obj) => await client.set(key, JSON.stringify(obj));
    const setAccount = async (id, account) => {
        const accountKey = accountKeyPrefix + id;
        await setObjectAsJson(accountKey, account);
        await client.set(accountByUserIdPrefix + account.userId, accountKey);
        return account;
    };
    const getAccount = async (id) => {
        const account = await client.get(accountKeyPrefix + id);
        if (!account)
            return null;
        return hydrateDates(account);
    };
    const setSession = async (id, session) => {
        const sessionKey = sessionKeyPrefix + id;
        await setObjectAsJson(sessionKey, session);
        await client.set(sessionByUserIdKeyPrefix + session.userId, sessionKey);
        return session;
    };
    const getSession = async (id) => {
        const session = await client.get(sessionKeyPrefix + id);
        if (!session)
            return null;
        return hydrateDates(session);
    };
    const setUser = async (id, user) => {
        await setObjectAsJson(userKeyPrefix + id, user);
        await client.set(`${emailKeyPrefix}${user.email}`, id);
        return user;
    };
    const getUser = async (id) => {
        const user = await client.get(userKeyPrefix + id);
        if (!user)
            return null;
        return hydrateDates(user);
    };
    return {
        async createUser(user) {
            const id = crypto.randomUUID();
            // TypeScript thinks the emailVerified field is missing
            // but all fields are copied directly from user, so it's there
            return await setUser(id, { ...user, id });
        },
        getUser,
        async getUserByEmail(email) {
            const userId = await client.get(emailKeyPrefix + email);
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
            await client.del(sessionKeyPrefix + sessionToken);
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
            const token = await client.get(tokenKey);
            if (!token)
                return null;
            await client.del(tokenKey);
            return hydrateDates(token);
            // return reviveFromJson(token)
        },
        async unlinkAccount(account) {
            const id = `${account.provider}:${account.providerAccountId}`;
            const dbAccount = await getAccount(id);
            if (!dbAccount)
                return;
            const accountKey = `${accountKeyPrefix}${id}`;
            await client.del(accountKey, `${accountByUserIdPrefix} + ${dbAccount.userId}`);
        },
        async deleteUser(userId) {
            const user = await getUser(userId);
            if (!user)
                return;
            const accountByUserKey = accountByUserIdPrefix + userId;
            const accountKey = await client.get(accountByUserKey);
            const sessionByUserIdKey = sessionByUserIdKeyPrefix + userId;
            const sessionKey = await client.get(sessionByUserIdKey);
            await client.del(userKeyPrefix + userId, `${emailKeyPrefix}${user.email}`, accountKey, accountByUserKey, sessionKey, sessionByUserIdKey);
        },
    };
}
