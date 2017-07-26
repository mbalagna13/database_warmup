exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('persons', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('password').unique().notNullable();
    table.string('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('persons')
};
