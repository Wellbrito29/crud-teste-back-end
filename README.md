# Express Sequelize

This is an user CRUD template with express and sequelize

## Installation

Use the NPM to install.

```bash
npm install
```

Create an json file within *config* folder with the name ```config.json``` with:
```json
{
  "server": {
    "listen": 3000
  },
  "database": {
    "username": "username",
    "password": "password",
    "database": "database",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres"
  }
}
```
Then change in the config what is needed to connect to the database.

## Database

There is a free service to test this template
[elephantsql.com](https://elephantsql.com)

## Insomnia Desktop App

This template provides an Insomnia collection to test the api.
Download the app [Insomnia](https://insomnia.rest/download)

## License
[MIT](https://choosealicense.com/licenses/mit/)
