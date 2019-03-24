// Migration files once run, should be not changed. If you
// want to modify and existing table, you should create migration
// to ALTER the table.

// If you do end up modifying migration files, you can drop your
// database and re-migrate everything. However, never EVER do that
// with database in production.

// The following "exports.up = ..." and "exports.down" is
// another way besides "module.exports = ..." to export values
// from a file. This will export an object with the methods "up"
// and "down".

// This method should do a change to our db's structure.
exports.up = function(knex) {
    return knex.schema.createTable("users", table => {
      // CREATE TABLE "users" (
      table.increments("id"); // "id" SERIAL,
      table.string("name"); // "name" VARCHAR(255),
      table.string("username"); // "username" VARCHAR(255),
      table.integer("age"); // "age" INTEGER,
      table.timestamp("createdAt").defaultTo(knex.fn.now());
      // "createdAt" TIMESTAMPZ DEFAULT NOW()
      // )
    });
  };
  
  // This method should reverse the change done in the above "up"
  // method.
  exports.down = function(knex) {
    return knex.schema.dropTable("users");
  };
  
