const express = require('express');

const router = express.Router();

const snapsController = require('../controllers/snapsController');


router.post('/', 
snapsController.scrapeWeb, 
snapsController.makeApiCall, 
snapsController.addSnap, (req,res) => {
  return res.status(200).json(res.locals.allSnaps);
});


module.exports = router;