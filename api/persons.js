const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const queries = require('../db/queries')
const User = require('../db/queries');


function validateUser(user) {
  const validEmail = typeof user.email == 'string' &&
    user.email.trim() != '';
  const validPassword = typeof user.password == 'string' &&
    user.password.trim() != '' &&
    user.password.trim().length >= 6;

  return validEmail && validPassword;
}

router.post('/signup', (req, res, next) => {
  if(validateUser(req.body)) {
    User
    .getUserByEmail(req.body.email)
    .then(user => {
      if(!user) {
        bcrypt.hash(req.body.password, 4)
          .then((hash) => {
            const user = {
              name:req.body.name,
              email: req.body.email,
              password: hash
            }
            User
            .createUser(user)
            .then(user => {
              res.json(user)
            })
          })
      } else {
        next(new Error('Invalid user'))
      }
    })
  } else {
    next( new Error('Invalid Password or Email'))
  }
})

router.post('/login', (req, res, next) => {
  if (validateUser(req.body)) {
    User
      .getUserByEmail(req.body.email)
      .then(user => {

        if (user) {
          bcrypt.compare(req.body.password, user.password)
            .then((id) => {
              res.json({
                user,
                id,
                message: 'ok'
              });
              alert('Sign-IN Successful!')
            })
          } else {
            next( new Error('Invalid user'))
          }
        })
  } else {
    next( new Error('Invalid Password or Email'))
  }
})

router.get('/', (req, res, next) => {
  queries.getAllusers().then(response => {
    res.json(response)
  })
})

module.exports = router;
