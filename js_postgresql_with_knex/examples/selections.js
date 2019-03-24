const knex = require("../db/client");

// To see more about using with knex, check out:
// https://knexjs.org/#Builder-wheres

knex
  .select("*")
  .from("posts")
  .limit(10)
  .then(data => {
    // If the query is successful, the result from it
    // will be return as an array of objects where
    // object corresponds to a row in the table where
    // its keys correspond to the columns of the table.
    // You can use console.table() to display array of
    // objects as a table. This also works in Chrome and most
    // browsers.
    // console.table(data);
    // console.log(data);
    // knex.destroy();
  });

knex
  .count("* as postCount")
  .max("id as maxId")
  .sum("id as totalOfIds")
  .from("posts")
  .then(data => {
    console.table(data);
    knex.destroy();
  });
