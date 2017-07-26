const dotenv = require('dotenv')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/mikegaming'
  },
  production:{
    client:'pg',
    connection: process.env.DATABASE_URL
  }

};
