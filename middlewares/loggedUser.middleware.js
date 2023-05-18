const updateLoggedUser = (req, res, next) => {
    res.locals.loggedUser = req.session.currentUser
    res.locals.userIsAdmin = req.session.currentUser?.role === 'ADMIN'
<<<<<<< HEAD
    res.locals.userIsEditor = req.session.currentUser?.role === 'EDITOR'
    res.locals.userIsBasic = req.session.currentUser?.role === 'BASIC'
=======
>>>>>>> b6461318d4040bf3cefb6f3998e4191b30a59e46
    next()
}


module.exports = { updateLoggedUser } 