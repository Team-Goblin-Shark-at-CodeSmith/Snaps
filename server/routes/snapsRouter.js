const express = require('express');

const router = express.Router();

const snapsController = require('../controllers/snapsController');

router.get('/',
  snapsController.getSnaps,
  (req, res) => {
    return res.status(200).json(res.locals.allSnaps);
  });


router.post('/',
  snapsController.scrapeWeb,
  snapsController.makeApiCall,
  snapsController.addSnap,
  (req, res) => {
    // redirect('/my-snaps');
    return res.status(200).json(res.locals.allSnaps);
  });


module.exports = router;