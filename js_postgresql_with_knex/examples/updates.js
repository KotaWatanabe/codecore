const knex = require("../db/client");

knex("posts") // This will perform the update on the "posts" table
  .where("id", 1)
  .update({
    title: "You won't believe what this mom did"
  })
  .returning("*")
  .then(data => {
    console.log(data);
    knex.destroy();
  });
