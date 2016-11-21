const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'jasondesiderio',
    password: '',
    database: 'jasondesiderio'
  },
  migrations: {
    tableName: 'migrations'
  }
})

console.log(knex)
