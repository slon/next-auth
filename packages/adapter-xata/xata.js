/**
 * This file is auto-generated from Xata and corresponds
 * to the database types in the Xata database. Please do not
 * augment by hand.
 */
import { buildClient, } from "@xata.io/client";
const schemas = [
    {
        name: "nextauth_users",
        columns: [
            {
                name: "email",
                type: "email",
            },
            {
                name: "emailVerified",
                type: "datetime",
            },
            {
                name: "name",
                type: "string",
            },
            {
                name: "image",
                type: "string",
            },
        ],
    },
    {
        name: "nextauth_accounts",
        columns: [
            {
                name: "user",
                type: "link",
                link: {
                    table: "nextauth_users",
                },
            },
            {
                name: "type",
                type: "string",
            },
            {
                name: "provider",
                type: "string",
            },
            {
                name: "providerAccountId",
                type: "string",
            },
            {
                name: "refresh_token",
                type: "string",
            },
            {
                name: "access_token",
                type: "string",
            },
            {
                name: "expires_at",
                type: "int",
            },
            {
                name: "token_type",
                type: "string",
            },
            {
                name: "scope",
                type: "string",
            },
            {
                name: "id_token",
                type: "text",
            },
            {
                name: "session_state",
                type: "string",
            },
        ],
    },
    {
        name: "nextauth_verificationTokens",
        columns: [
            {
                name: "identifier",
                type: "string",
            },
            {
                name: "token",
                type: "string",
            },
            {
                name: "expires",
                type: "datetime",
            },
        ],
    },
    {
        name: "nextauth_users_accounts",
        columns: [
            {
                name: "user",
                type: "link",
                link: {
                    table: "nextauth_users",
                },
            },
            {
                name: "account",
                type: "link",
                link: {
                    table: "nextauth_accounts",
                },
            },
        ],
    },
    {
        name: "nextauth_users_sessions",
        columns: [
            {
                name: "user",
                type: "link",
                link: {
                    table: "nextauth_users",
                },
            },
            {
                name: "session",
                type: "link",
                link: {
                    table: "nextauth_sessions",
                },
            },
        ],
    },
    {
        name: "nextauth_sessions",
        columns: [
            {
                name: "sessionToken",
                type: "string",
            },
            {
                name: "expires",
                type: "datetime",
            },
            {
                name: "user",
                type: "link",
                link: {
                    table: "nextauth_users",
                },
            },
        ],
    },
];
const DatabaseClient = buildClient();
export class XataClient extends DatabaseClient {
    constructor(options) {
        super({ databaseURL: "", ...options }, schemas);
    }
}
