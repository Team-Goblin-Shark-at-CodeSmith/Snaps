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
const userQueryValues = [
  req.body.username,
  req.body.password,
  req.body.email,
  req.body.firstName,
  req.body.lastName,
];
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

userController.settings = async (req, res, next) => {
  console.log('Inside of settings middleware');
  try {

    console.log('req.params.id: ', req.params.id);
    console.log('req.body.value: ', req.body.value);

    // //! Need to get current username and add below
    const currUsername = "mhart";


    const settingsUpdateValues = [
      req.params.id,
      req.body.value,
      currUsername
    ];

    const settingsUpdateQuery = `UPDATE TABLE users
    SET $1 = $2
    WHERE username =  $3`

    const querySubmission = await db.query(settingsUpdateQuery, settingsUpdateValues)
    console.log('Successfully updated users settings in middleware');
    return next();
  }
  catch {
    const err = {
      log: 'Error updating users table for user settings: ',
      status: 500,
      message: 'An error occured updating your settings. Please try again',
    };
    return next(err);
  }
}

module.exports = userController;
