// Update with your config settings.

module.exports = {

  development: {
    // tell knex that our client is pg
    client: 'pg',
    connection: {
      // tell knex that we have a database called fancy_todo_list_development and use this one.
      database: 'fancy_todo_list_development',
    },
    migrations: {
      // tell knex that our migration files are in the directory db/migrations
      directory: 'db/migrations'
    }
  }

};
