const express = require('express');


const {
  
  allTransferOfUser,
  createUser,
  loginUser
  
} = require('../controllers/user.controller');


const router = express.Router();



router.post('/signup', createUser)



router.post('/login',loginUser)

router.get('/:id/history',allTransferOfUser)


module.exports = { usersRouter: router };
