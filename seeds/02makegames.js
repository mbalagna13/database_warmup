
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE games RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('games').insert([
        { name: 'SSBM', type:'2d platform fighting', persons_id:"1"},
        { name: 'MVC3', type:'2d fighting', persons_id:"1"},
        { name: 'MVC3', type:'2d fighting', persons_id:"2"},
        { name: 'MVC3', type:'2d fighting', persons_id:"3"},
        { name: 'COD4', type:'FPS', persons_id:"2"},
        { name: 'COD4', type:'FPS', persons_id:"1"}

      ])
      // Inserts seed entries

    });
};
