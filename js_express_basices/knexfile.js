// Update with your config settings.

// 1. npm i pg knex
// 2. knex init
// 3. Edit knexfile.js to your liking
// 4. createdb -e express_adventure
// 5. knex migrate:make CreateArticles
// 6. Write code in the migration file to create a table and drop a table
// 7. knex migrate:latest
// 8. Create a client.js file in the ./db/ to help making queries with knex

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "express_adventure"
    },
    migrations: {
      directory: "./db/migrations"
    }
  }
};
