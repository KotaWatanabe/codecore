// Update with your config settings.

module.exports = {

  development: {
    client: "pg",
    connection: {
      database: "knex_labs"
    }
  },
    migrations: {
      tableName: 'knex_migrations',
      directory:"./db/migrations"
    }
  

};
