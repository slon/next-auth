export class TypedDocumentString extends String {
    constructor(value, __meta__) {
        super(value);
        this.value = value;
        this.__meta__ = __meta__;
    }
    toString() {
        return this.value;
    }
}
export const UserFragmentDoc = new TypedDocumentString(`
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}
    `, { "fragmentName": "User" });
export const SessionFragmentDoc = new TypedDocumentString(`
    fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}
    `, { "fragmentName": "Session" });
export const AccountFragmentDoc = new TypedDocumentString(`
    fragment Account on accounts {
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  access_token
  refresh_token
  session_state
  providerAccountId
}
    `, { "fragmentName": "Account" });
export const VerificationTokenFragmentDoc = new TypedDocumentString(`
    fragment VerificationToken on verification_tokens {
  token
  expires
  identifier
}
    `, { "fragmentName": "VerificationToken" });
export const CreateAccountDocument = new TypedDocumentString(`
    mutation CreateAccount($data: accounts_insert_input!) {
  insert_accounts_one(object: $data) {
    ...Account
  }
}
    fragment Account on accounts {
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  access_token
  refresh_token
  session_state
  providerAccountId
}`);
export const DeleteAccountDocument = new TypedDocumentString(`
    mutation DeleteAccount($provider: String!, $providerAccountId: String!) {
  delete_accounts(
    where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
  ) {
    returning {
      ...Account
    }
  }
}
    fragment Account on accounts {
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  access_token
  refresh_token
  session_state
  providerAccountId
}`);
export const GetAccountDocument = new TypedDocumentString(`
    query GetAccount($provider: String!, $providerAccountId: String!) {
  accounts(
    where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
  ) {
    ...Account
  }
}
    fragment Account on accounts {
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  access_token
  refresh_token
  session_state
  providerAccountId
}`);
export const DeleteAllDocument = new TypedDocumentString(`
    mutation DeleteAll {
  delete_accounts(where: {}) {
    affected_rows
  }
  delete_sessions(where: {}) {
    affected_rows
  }
  delete_users(where: {}) {
    affected_rows
  }
  delete_verification_tokens(where: {}) {
    affected_rows
  }
}
    `);
export const GetSessionAndUserDocument = new TypedDocumentString(`
    query GetSessionAndUser($sessionToken: String!) {
  sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    ...Session
    user {
      ...User
    }
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}
fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}`);
export const GetSessionDocument = new TypedDocumentString(`
    query GetSession($sessionToken: String!) {
  sessions_by_pk(sessionToken: $sessionToken) {
    ...Session
  }
}
    fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}`);
export const CreateSessionDocument = new TypedDocumentString(`
    mutation CreateSession($data: sessions_insert_input!) {
  insert_sessions_one(object: $data) {
    ...Session
  }
}
    fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}`);
export const UpdateSessionDocument = new TypedDocumentString(`
    mutation UpdateSession($sessionToken: String, $data: sessions_set_input!) {
  update_sessions(where: {sessionToken: {_eq: $sessionToken}}, _set: $data) {
    returning {
      ...Session
    }
  }
}
    fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}`);
export const DeleteSessionDocument = new TypedDocumentString(`
    mutation DeleteSession($sessionToken: String!) {
  delete_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    returning {
      ...Session
    }
  }
}
    fragment Session on sessions {
  id
  userId
  expires
  sessionToken
}`);
export const GetUserDocument = new TypedDocumentString(`
    query GetUser($id: uuid!) {
  users_by_pk(id: $id) {
    ...User
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}`);
export const GetUsersDocument = new TypedDocumentString(`
    query GetUsers($where: users_bool_exp!) {
  users(where: $where) {
    ...User
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}`);
export const CreateUserDocument = new TypedDocumentString(`
    mutation CreateUser($data: users_insert_input!) {
  insert_users_one(object: $data) {
    ...User
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}`);
export const UpdateUserDocument = new TypedDocumentString(`
    mutation UpdateUser($id: uuid!, $data: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...User
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}`);
export const DeleteUserDocument = new TypedDocumentString(`
    mutation DeleteUser($id: uuid!) {
  delete_users_by_pk(id: $id) {
    ...User
  }
}
    fragment User on users {
  id
  name
  email
  image
  emailVerified
}`);
export const CreateVerificationTokenDocument = new TypedDocumentString(`
    mutation CreateVerificationToken($data: verification_tokens_insert_input!) {
  insert_verification_tokens_one(object: $data) {
    ...VerificationToken
  }
}
    fragment VerificationToken on verification_tokens {
  token
  expires
  identifier
}`);
export const DeleteVerificationTokenDocument = new TypedDocumentString(`
    mutation DeleteVerificationToken($identifier: String!, $token: String!) {
  delete_verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    returning {
      ...VerificationToken
    }
  }
}
    fragment VerificationToken on verification_tokens {
  token
  expires
  identifier
}`);
export const GetVerificationTokenDocument = new TypedDocumentString(`
    query GetVerificationToken($identifier: String!, $token: String!) {
  verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    ...VerificationToken
  }
}
    fragment VerificationToken on verification_tokens {
  token
  expires
  identifier
}`);
