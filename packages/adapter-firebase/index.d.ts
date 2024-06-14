/**
 * Official **Firebase** adapter for Auth.js / NextAuth.js, using the [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
 * and [Firestore](https://firebase.google.com/docs/firestore).
 * [![Firestore logo](https://authjs.dev/img/adapters/firebase.svg)](https://firebase.google.com)
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install @auth/firebase-adapter firebase-admin
 * ```
 *
 * @module @auth/firebase-adapter
 */
import { type AppOptions } from "firebase-admin/app";
import { Firestore } from "firebase-admin/firestore";
import type { Adapter } from "@auth/core/adapters";
/** Configure the Firebase Adapter. */
export interface FirebaseAdapterConfig extends AppOptions {
    /**
     * The name of the app passed to {@link https://firebase.google.com/docs/reference/admin/node/firebase-admin.md#initializeapp `initializeApp()`}.
     */
    name?: string;
    firestore?: Firestore;
    /**
     * Use this option if mixed `snake_case` and `camelCase` field names in the database is an issue for you.
     * Passing `snake_case` will convert all field and collection names to `snake_case`.
     * E.g. the collection `verificationTokens` will be `verification_tokens`,
     * and fields like `emailVerified` will be `email_verified` instead.
     *
     *
     * @example
     * ```ts title="pages/api/auth/[...nextauth].ts"
     * import NextAuth from "next-auth"
     * import { FirestoreAdapter } from "@auth/firebase-adapter"
     *
     * export default NextAuth({
     *  adapter: FirestoreAdapter({ namingStrategy: "snake_case" })
     *  // ...
     * })
     * ```
     */
    namingStrategy?: "snake_case" | "default";
}
export declare function FirestoreAdapter(config?: FirebaseAdapterConfig | Firestore): Adapter;
/**
 * Utility function that helps making sure that there is no duplicate app initialization issues in serverless environments.
 * If no parameter is passed, it will use the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to initialize a Firestore instance.
 *
 * @example
 * ```ts title="lib/firestore.ts"
 * import { initFirestore } from "@auth/firebase-adapter"
 * import { cert } from "firebase-admin/app"
 *
 * export const firestore = initFirestore({
 *  credential: cert({
 *    projectId: process.env.FIREBASE_PROJECT_ID,
 *    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
 *    privateKey: process.env.FIREBASE_PRIVATE_KEY,
 *  })
 * })
 * ```
 */
export declare function initFirestore(options?: AppOptions & {
    name?: FirebaseAdapterConfig["name"];
}): Firestore;
//# sourceMappingURL=index.d.ts.map