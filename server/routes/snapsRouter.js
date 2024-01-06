const express = require('express');

const router = express.Router();

const snapsController = require('../controllers/snapsController');


router.post('/', snapsController.addSnap, (req,res) => {
  return res.status(200).json('Add Snap Success');
});


module.exports = router;