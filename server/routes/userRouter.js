const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/login', userController.login, (req,res) => {
    res.status(200).json()
});

//router.post('/signup', userController.signup, (req,res) => {
//     res.status(200).json()
// })


module.exports = router;