const db = require('../models/snapsModel');


const userController = {};

userController.login = async(req, res, next) => {
    console.log('inside login controller!');
    console.log('this is req.params stuff',req.params.username, req.params.password);
    try {


      const queryObj = {
        //where we set $1 and $2 we are setting parameter values so they can be subsituted with what was provided by the front end
        text: 'SELECT Snaps.snap_id, Snaps.title, Snaps.url, Snaps.snap_text FROM Snaps LEFT OUTER JOIN Users ON Users.id = Snaps.user_id WHERE Users.username = $1 AND Users.password = $2;',
        values: [req.params.username, req.params.password],
      };
      //Taking the data for each user 
      const user = await db.query(queryObj);
      // console.log(user);
      //user.rows is the data (URL , Snaps)
      res.locals.user = user.rows;
      // console.log('this is user', user);
      return next();
    } catch {
      const err = {
        log: 'Express error handler caught error in userController.login',
        status: 500,
        message: { err: 'A massive error occured' },
      }
      return next(err);
    }
}

userController.signup = async(req, res, next) => {

  try {
    const queryObj = {                                     //$1 is the first value in a value
      text: 'INSERT INTO Users (username, password) VALUES ($1, $2)',
      values: [req.body.username, req.body.password],
    };
    const newUser = await db.query(queryObj);
    console.log(newUser, 'newuser');
    res.locals.newUser = newUser;
    // console.log('this is user', user);
    return next();
  } catch {
    const err = {
      log: 'Express error handler caught error in userController.signup',
      status: 500,
      message: { err: 'A massive error occured' },
    }
    return next(err);
  }
}



module.exports = userController;