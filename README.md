# swan-cms

## Todo
- Integrate flow types
- Convert to style-lint for styled-components
- Immutable redux?
- Pick icons theme pack
- Update graphql and figure out schema error
- Add shared folder containing enums
- Add user permissions
- Add a node logger
- Add router paths constants file to enable using named routes
- Create data flow chart
- Audit packages and remove or utilize
- Dev server with auto refresh
- Figure out plug in architecture
- Look into webpack-blocks
- Create user friendly errors
- a11y audit
- l18n audit
- security audit
- switch to npm5 when released
- Create production build with optimizations

## App Directory Structure

## User Directory Structure
- config
- plugins
- static
- storage
- templates

## Database
### Setup
- `CREATE EXTENSION IF NOT EXISTS "pgcrypto";`

### Migrations
- `yarn run knex:migrate`

### Rollbacks
- `yarn run knex:rollback`

## .env
### Template
```json
{
  "node": {
    "env": "development"
  },
  "token": {
    "secret": ""
  },
  "db": {
    "client": "pg",
    "host": "localhost",`
    "database": "",
    "username": "",
    "password": ""
  }
}
```
