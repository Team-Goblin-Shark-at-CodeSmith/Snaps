const db = require('../models/snapsModel');

const snapsController = {};

snapsController.addSnap = async (req, res, next) => {

  try {
    const queryObj = {
      text: 'INSERT INTO Snaps (user_id, title, url, snap) VALUES ($1, $2, $3, $4)',
      values: [req.body.user_id, req.body.title, req.body.url, req.body.snap],
    };

    await db.query(queryObj);

    const getAllQuery = {
      text: `SELECT * FROM users LEFT OUTER JOIN snaps ON users.id = snaps.user_id WHERE snaps.user_id = $1;`,
      values: [req.body.user_id],
    };

    const allSnaps = await db.query(getAllQuery);
    console.log('allsnaps worked');
    res.locals.allSnaps = allSnaps.rows;
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