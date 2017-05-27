exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('username', 100).unique().notNullable()
    table.string('firstName', 100)
    table.string('lastName', 100)
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.timestamp('createdAt', true).notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updatedAt', true).notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('users')
}
