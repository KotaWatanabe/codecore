
exports.up = function(knex, Promise) {
    return knex.schema.createTable("articles", t => {
        t.bigIncrements("id");
        t.string("title");
        t.string("username");
        t.text("content");
        t.integer("viewCount");
        t.timestamp("createdAt").defaultTo(knex.fn.now());
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("articles");
};
