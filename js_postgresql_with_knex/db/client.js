// Load the config of our knexfile.js
const knexfile = require("../knexfile");

const knexConnector = require("knex");
// The knexConnector function creates a client, but it needs
// the configuration database. Here we load it from the knexfile.js
// we created previously.
const knex = knexConnector(knexfile.development);

// Here we export the knex client which will allow us to perform
// queries on our database. To make queries from other files, we'll
// require this file to use the client.
module.exports = knex;
