const db = require('../models/snapsModel');

const snapsController = {};

snapsController.addSnap = async (req, res, next) => {

  try {
    const queryObj = {
      text: 'INSERT INTO Snaps (user_id, title, url, snap_text) VALUES ($1, $2, $3, $4)',
      values: [req.body.user_id, req.body.title, req.body.url, req.body.snap_text],
    };

    await db.query(queryObj);

    const getAllQuery = {
      text: 'SELECT Snaps.user_id, Snaps.snap_id, Snaps.title, Snaps.url, Snaps.snap_text FROM Snaps LEFT OUTER JOIN Users ON Users.id = Snaps.user_id WHERE Snaps.user_id = $1;',
      values: [req.body.user_id],
    };

    const allSnaps = await db.query(getAllQuery);
    // console.log(user);

    // MH - This gets sent back to the SnapsContainer and is dispatched to the setSnapsList reducer
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