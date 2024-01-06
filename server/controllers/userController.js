const userController = {};

userController.login = (req, res, next) => {
    console.log('inside login controller!');

    return next();
}





module.exports = userController;