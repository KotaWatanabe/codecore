// To get this project started, we did:

// 1. Generate the package.json.
//    `npm init -y`
// 2. Install the packages "pg" & "knex"
//    `npm i pg knex`
// 3. Generate this file (i.e. knexfile.js)
//    `knex init`

module.exports = {

  development: {
    client: "pg",
    // The "client" setting above corresponds the library used to
    // connect to our database.
    connection: {
      database:"knex_demo"
    },
    migrations:{
      // Migrations are JS files that have queries to
      // build the structure of your database (e.g. creating tables,
      // altering tables and deleting tables.)
      tableName: "migrations",
      directory: "./db/migrations"
    }
  }
};
