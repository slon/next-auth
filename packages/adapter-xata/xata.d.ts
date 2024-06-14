/**
 * This file is auto-generated from Xata and corresponds
 * to the database types in the Xata database. Please do not
 * augment by hand.
 */
import { BaseClientOptions, XataRecord, ClientConstructor } from "@xata.io/client";
export interface NextauthUser {
    email?: string | null;
    emailVerified?: Date | null;
    name?: string | null;
    image?: string | null;
}
export type NextauthUserRecord = NextauthUser & XataRecord;
export interface NextauthAccount {
    user?: NextauthUserRecord | null;
    type?: string | null;
    provider?: string | null;
    providerAccountId?: string | null;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
}
export type NextauthAccountRecord = NextauthAccount & XataRecord;
export interface NextauthVerificationToken {
    identifier?: string | null;
    token?: string | null;
    expires?: Date | null;
}
export type NextauthVerificationTokenRecord = NextauthVerificationToken & XataRecord;
export interface NextauthUsersAccount {
    user?: NextauthUserRecord | null;
    account?: NextauthAccountRecord | null;
}
export type NextauthUsersAccountRecord = NextauthUsersAccount & XataRecord;
export interface NextauthUsersSession {
    user?: NextauthUserRecord | null;
    session?: NextauthSessionRecord | null;
}
export type NextauthUsersSessionRecord = NextauthUsersSession & XataRecord;
export interface NextauthSession {
    sessionToken?: string | null;
    expires?: Date | null;
    user?: NextauthUserRecord | null;
}
export type NextauthSessionRecord = NextauthSession & XataRecord;
export type DatabaseSchema = {
    nextauth_users: NextauthUserRecord;
    nextauth_accounts: NextauthAccountRecord;
    nextauth_verificationTokens: NextauthVerificationTokenRecord;
    nextauth_users_accounts: NextauthUsersAccountRecord;
    nextauth_users_sessions: NextauthUsersSessionRecord;
    nextauth_sessions: NextauthSessionRecord;
};
declare const DatabaseClient: ClientConstructor<any>;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
    constructor(options?: BaseClientOptions);
}
export {};
//# sourceMappingURL=xata.d.ts.map