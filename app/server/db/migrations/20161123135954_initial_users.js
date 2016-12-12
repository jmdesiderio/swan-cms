exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username', 100).unique().notNullable()
    table.string('firstName', 100)
    table.string('lastName', 100)
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.boolean('admin').notNullable().defaultTo(false)
    table.boolean('client').notNullable().defaultTo(false)
    table.boolean('locked').notNullable().defaultTo(false)
    table.boolean('suspended').notNullable().defaultTo(false)
    table.boolean('pending').notNullable().defaultTo(false)
    table.boolean('archived').notNullable().defaultTo(false)
    table.timestamp('lastLoginDate')
    table.string('lastLoginAttemptIp', 45)
    table.timestamp('invalidLoginWindowStart')
    table.integer('invalidLoginCount').unsigned().defaultTo(0)
    table.timestamp('lastInvalidLoginDate')
    table.timestamp('lockoutDate')
    table.string('verificationCode', 100).index()
    table.timestamp('verificationCodeIssuedDate')
    table.string('unverifiedEmail')
    table.boolean('passwordResetRequired').notNullable().defaultTo(false)
    table.timestamp('lastPasswordChangeDate').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'))
    table.uuid('uuid').index().notNullable().defaultTo(knex.raw('gen_random_uuid()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users')
}
