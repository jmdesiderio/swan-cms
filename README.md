# swan-cms

## Todo
- Components
  - Alert
  - Flash Message
  - Confirmation
  - Modal
  - Dialog
- Add reselect
- Create animated switch for form
- Create loading state
- Add testing
- Style forms for config pages and make overrides for login page style
- Select react components to use - modal, virtualized list, etc
- Write a breadcrumb component with app route tree
- Add router paths constants file to enable using named routes
- Integrate flow types
- Improve chrome debugger experience
- Convert to style-lint for styled-components
- Immutable redux?
- Pick icons theme pack
- Update graphql and figure out schema error
- Add shared folder containing enums
- Add user permissions
- Add a node logger
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
- `npm run knex:migrate`

### Rollbacks
- `npm run knex:rollback`

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
