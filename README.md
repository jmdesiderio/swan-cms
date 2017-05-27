# swan-cms

## Todo
- Switch to styled-components using themeing
- Add shared folder containing enums
- Add user permissions
- Add a node logger
- Add router paths constants file to enable using named routes
- Create data flow chart
- Audit packages and remove or utilize
- Dev server with auto refresh
- Figure out plug in architecture
- Look into webpack-blocks
- a11y audit
- l18n audit
- security audit
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
    "host": "localhost",
    "database": "",
    "username": "",
    "password": ""
  }
}
```
