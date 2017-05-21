# swan-cms

## Todo
- Add router paths constants file to enable using named routes
- Create data flow chart
- Audit packages and remove or utilize
- Configure source maps for chrome debugger
- Dev server with auto refresh
- Add shared folder containing enums
- Switch to sessions instead of JWT
- Add user permissions
- Switch to styled-components using themeing
- Figure out plug in architecture
- Create production build with optimizations
- Look into webpack-blocks

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
- `npm run knex -- migrate:latest`

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
