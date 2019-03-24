
exports.up = function(knex) {
    return knex.schema.createTable("posts", table => {
        table.increments("id"); 
        table.string("title"); 
        table.text("content"); 
        table.timestamp("createdAt").defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("posts");
};
