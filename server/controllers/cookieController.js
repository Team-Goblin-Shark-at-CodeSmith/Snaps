const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('userID', res.locals.id);
    return next()
}

module.exports = cookieController;