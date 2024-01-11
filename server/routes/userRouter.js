const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/login', userController.login, (req, res) => {
  return res.status(200).json(res.locals.username);
});

router.post('/signup', userController.signup, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

// router.get('/settings', (req, res) => {
//   return res.status(200).json({});
// });

router.post('/settings', userController.settings, (req, res) => {
  return res.status(200).json(res.locals.settings);
});


module.exports = router;