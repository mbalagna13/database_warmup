const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {

return knex.raw('TRUNCATE persons RESTART IDENTITY CASCADE;')
  .then(function () {

    const salt = bcrypt.genSaltSync(saltRounds)
    // Inserts seed entries
    return knex('persons').insert([
      { name: 'Mike', email: "lunchmeat@gmail.com", password:bcrypt.hashSync('password123', salt)},
      { name: 'Frank', email: "lunc@gmail.com", password:bcrypt.hashSync('password1233', salt)},
      { name: 'Tom', email: "tomtom@gmail.com", password:bcrypt.hashSync('tomtomtom', salt)},
      { name: 'Dan', email: "dandan@gmail.com", password:bcrypt.hashSync('dandandan', salt)}
    ]);
  });
};
