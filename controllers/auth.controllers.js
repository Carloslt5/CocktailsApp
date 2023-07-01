const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require('../models/User.model')


const signupPage = (req, res, next) => {
    res.render("auth/signup")

}

const handlerSignup = (req, res, next) => {

    const { path: profileImg } = req.file
    const { name, lastName, email, password } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword =>
            User
                .create({ name, lastName, email, password: hashedPassword, profileImg }))
        .then(() => res.redirect('/login'))
        .catch(err => next(err))

}

const loginPage = (req, res, next) => {
    res.render("auth/login")
}


const handlerLogin = (req, res, next) => {
    const { email, password } = req.body

    if (email.length === 0 || password.length === 0) {
        res.render('auth/login', { errorMessage: 'Fields are required' })
        return
    }

    User
        .findOne({ email })
        .then(foundUser => {

            if (!foundUser) {
                res.render('auth/login', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcrypt.compareSync(password, foundUser.password)) {
                res.render('auth/login', { errorMessage: 'Contraseña incorrecta' })
                return
            }

            req.session.currentUser = foundUser
            res.redirect('/profile')
        })
}

const handlerLogout = (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
}

module.exports = {
    signupPage,
    handlerSignup,
    loginPage,
    handlerLogin,
    handlerLogout
}