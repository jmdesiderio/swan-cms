exports.up = (knex, Promise) => {
  return knex.schema.createTable('sessions', table => {
    table.increments()
    table.integer('userId').unsigned().notNullable()
    table.foreign('userId').references('users.id')
    table.uuid('token').index().notNullable().defaultTo(knex.raw('gen_random_uuid()'))
    table.boolean('enabled').notNullable().defaultTo(true)
    table.timestamp('createdAt', true).notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updatedAt', true).notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('sessions')
}
