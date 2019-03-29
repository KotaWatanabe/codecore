// Schema files are used to describe changes being made to a database
exports.up = function(knex, Promise) {
  // when we run the migrations
  // this will tell knex to create a table called todo with all of the
  // defined columns with their data type
  return knex.schema.createTable('todo', (t) => {
    t.increments('id').primary();
    t.string('username');
    t.text('body');
    t.timestamps(true, true);
  })
};

// reverses the changes from the up function
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};
