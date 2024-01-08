const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

//Replacing url 'Username' & 'Password' with what was provided by user
router.get('/login/:username/:password', userController.login, (req,res) => {
  return res.status(200).json(res.locals.user);
});

router.post('/signup', userController.signup, (req,res) => {
  return res.status(200).json(res.locals.newUser);
});


module.exports = router;