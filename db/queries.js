const knex = require('./knex')

module.exports = {
  getUserByEmail(email) {
    return knex('persons').where('email', email).first();
  },
  createUser(user) {
    return knex('persons').insert(user).returning('*')
  },
  getAllusers() {
    return knex('persons')
  }
}
