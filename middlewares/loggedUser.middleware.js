const loggedUser = (req, res, next) => {
    res.locals.loggedUser = req.session.currentUser
    console.log('asdasdasdasdasdasd')
    next()
}


module.exports = { loggedUser } 