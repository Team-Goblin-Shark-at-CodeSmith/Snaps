const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie = res.locals[0].username;
}