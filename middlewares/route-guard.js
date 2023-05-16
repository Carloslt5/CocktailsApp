const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render('auth/login', { errorMessage: 'Log in to continue' })
}


const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/')
}


const checkRoles = (...admittedRoles) => (req, res, next) => {

    const isAdmitted = admittedRoles.includes(req.session.currentUser.role)

    if (isAdmitted) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'Unauthorized access.' })
    }
}

module.exports = { isLoggedIn, isLoggedOut, checkRoles }