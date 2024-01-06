const db = require('../models/snapsModel');


const userController = {};

userController.login = async(req, res, next) => {
    console.log('inside login controller!');
    console.log('this is req.params stuff',req.params.username, req.params.password);
    try {

      const queryObj = {
        text: 'SELECT Snaps.snap_id, Snaps.title, Snaps.url, Snaps.snap_text FROM Snaps LEFT OUTER JOIN Users ON Users.id = Snaps.user_id WHERE Users.username = $1 AND Users.password = $2;',
        values: [req.params.username, req.params.password],
      };
      const user = await db.query(queryObj);
      console.log(user);

      res.locals.user = user.rows;
      console.log('this is user', user);

      return next();

    } catch {
      const err = {
        log: 'Express error handler caught error in userController.login',
        status: 500,
        message: { err: 'A massive error occured' },
      }
      return next(err);
    }

  // Check if user exists in db




    return next();
}





module.exports = userController;