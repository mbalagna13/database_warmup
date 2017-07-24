const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Deletes ALL existing entries
return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
  .then(function () {

    const salt = bcrypt.genSaltSync(saltRounds)
    // Inserts seed entries
    return knex('users').insert([
      {id:1, name: 'Mike', email: "lunchmeat@gmail.com", password:bcrypt.hashSync('password123', salt)},
      {id:2, name: 'Frank', email: "lunc@gmail.com", password:bcrypt.hashSync('password1233', salt)},
      {id:3, name: 'Tom', email: "tomtom@gmail.com", password:bcrypt.hashSync('tomtomtom', salt)},
      {id:4, name: 'Dan', email: "dandan@gmail.com", password:bcrypt.hashSync('dandandan', salt)}
    ]);
  });
};
