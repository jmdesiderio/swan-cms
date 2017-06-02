exports.up = (knex, Promise) => {
  return knex.schema.createTable('fieldGroups', table => {
    table.increments()
    table.string('name', 100).unique().notNullable()
    table.timestamp('createdAt', true).notNullable().defaultTo(knex.raw('now()'))
    table.timestamp('updatedAt', true).notNullable().defaultTo(knex.raw('now()'))
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('fieldGroups')
}
