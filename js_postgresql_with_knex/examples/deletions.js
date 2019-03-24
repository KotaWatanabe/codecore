const knex = require("../db/client");

knex("posts")
  .where("id", 50)
  .del()
  .returning("*")
  .then(data => {
    console.log(data);
  });
