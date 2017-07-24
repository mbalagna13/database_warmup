const bcrypt = require('bcrypt')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Deletes ALL existing entries
return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
  .then(function () {

    const salt = bcrypt.genSaltSync(saltRounds)
    // Inserts seed entries
    return knex('users').insert(users);
  });
};
