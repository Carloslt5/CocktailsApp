const updateLoggedUser = (req, res, next) => {
    res.locals.loggedUser = req.session.currentUser
    res.locals.userIsAdmin = req.session.currentUser?.role === 'ADMIN'
    next()
}


module.exports = { updateLoggedUser } 