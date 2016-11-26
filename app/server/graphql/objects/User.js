export const schema = `
  type User {
    id: ID!
    username: String
    firstName: String
    lastName: String
    email: String
    admin: Boolean
    client: Boolean
    locked: Boolean
    suspended: Boolean
    pending: Boolean
    archived: Boolean
    lastLoginDate: String
    lastLoginAttemptIp: String
    invalidLoginWindowStart: String
    invalidLoginCount: String
    lastInvalidLoginDate: String
    lockoutDate: String
    verificationCodeIssuedDate: String
    unverifiedEmail: String
    passwordResetRequired: Boolean
    lastPasswordChangeDate: String
    createdAt: String
    updatedAt: String
    uuid: ID
  }
`
