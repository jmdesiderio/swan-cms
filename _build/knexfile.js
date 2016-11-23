const path = require('path')

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    directory: path.join(__dirname, '../app/server/db/migrations')
  },
  seeds: {
    directory: path.join(__dirname, '../app/server/db/seeds')
  }
}
