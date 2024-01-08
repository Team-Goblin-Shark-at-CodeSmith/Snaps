const express = require('express');

const router = express.Router();

const snapsController = require('../controllers/snapsController');


router.post('/', snapsController.addSnap, (req,res) => {
  console.log(res.locals.newSnap)
  return res.status(200).json(res.locals.allSnaps);
});


module.exports = router;