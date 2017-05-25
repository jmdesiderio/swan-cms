exports.up = (knex, Promise) => {
  return knex.schema.createTable('sessions', (table) => {
    table.increments()
    table.integer('userId').unsigned().notNullable()
    table.foreign('userId').references('users.id')
    table.string('token', 100).unique().notNullable()
    table.timestamp('createdAt').notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updatedAt').notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('sessions')
}
