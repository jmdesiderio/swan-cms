const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'jasondesiderio',
      user: 'jasondesiderio',
      password: ''
    },
    migrations: {
      directory: path.join(__dirname, '/app/server/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/app/server/db/seeds')
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'jasondesiderio',
      user: 'jasondesiderio',
      password: ''
    },
    migrations: {
      directory: path.join(__dirname, '/app/server/db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/app/server/db/seeds')
    }
  }
}
