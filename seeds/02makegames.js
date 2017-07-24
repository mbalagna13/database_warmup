
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE users RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('games').insert([
        {id:1, name: 'SSBM', type:'2d platform fighting', user_id:"1"},
        {id:2, name: 'MVC3', type:'2d fighting', user_id:"1"},
      ])
      // Inserts seed entries

    });
};
