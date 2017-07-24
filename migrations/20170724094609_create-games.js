
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('games', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.interger('user_id').notNullable();
    })
};

exports.down = function(knex, Promise) {

};
