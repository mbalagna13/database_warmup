const knex = require('./knex')

module.exports = {
  getUserByEmail(email) {
    return knex('persons').where('email', email).first();
  },
  createUser(user) {
    return knex('persons').insert(user).returning('*');
  },
  getAllusers() {
    return knex('persons')
  },
  getUserById(id) {
    return knex('persons').where('id', id).first();
  },
  deleteUserbyid(id) {
    return knex('persons').where('id', id).del();
  },
  editUserInfo(id, user) {
    return knex('persons').where('id', id).update(user, '*')
  }
}
