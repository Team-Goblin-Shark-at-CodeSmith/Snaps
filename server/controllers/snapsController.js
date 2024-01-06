const db = require('../models/snapsModel');

const snapsController = {};

snapsController.addSnap = async(req, res, next) => {

  try {
    const queryObj = {
      text: 'INSERT INTO Snaps (user_id, title, url, snap_text) VALUES ($1, $2, $3, $4)',
      values: [req.body.user_id, req.body.title, req.body.url, req.body.snap_text],
    };

    const newSnap = await db.query(queryObj);
    res.locals.newSnap = newSnap.rows;

    return next();
  } catch {
    const err = {
      log: 'Express error handler caught error in snapsController.addSnap',
      status: 500,
      message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}



module.exports = snapsController;