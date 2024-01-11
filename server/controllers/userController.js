const db = require('../models/snapsModel');


const userController = {};

userController.login = async (req, res, next) => {
  console.log('req.body.username: ', req.body.username);
  console.log('req.body.password: ', req.body.password);

  const userQueryValues = [
    req.body.username,
    req.body.password,
  ];

  const userLoginQuery = `SELECT username
    FROM users WHERE username = $1
    AND password = $2`

  try {
    const user = await db.query(userLoginQuery, userQueryValues);
    console.log('user: ', user);
    if (req.body.username === user.rows[0].username) {
      console.log('USERNAME MATCHES');
    }
    res.locals.username = req.body.username;

    return next();
  }
  catch {
    return next({
      log: 'Error with SQL query!!!',
      message: 'Error with SQL query!!!'
    });
  }


}

userController.signup = async (req, res, next) => {

  try {
    const queryObj = {
      text: 'INSERT INTO Users (username, password, email, firstname, lastname ) VALUES ($1, $2, $3, $4, $5)',
      values: [req.body.username, req.body.password, req.body.email, req.body.firstName, req.body.lastName],
      // console.log('this is what is being sent in ', req.body.firstname)
    };
    const newUser = await db.query(queryObj);
    console.log(newUser, 'newuser');
    res.locals.newUser = newUser.rows;
    console.log('this is user', username);
    return next();
  } catch {
    const err = {
      log: 'Express error handler caught error in userController.signup',
      status: 500,
      message: { err: 'A massive error occured' },
    };
    return next(err);
  }
};

module.exports = userController;
