const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require('../models/User.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedOut } = require('../middlewares/route-guard')

// signup form (render)
router.get("/signup", isLoggedOut, (req, res, next) => {
    res.render("auth/signup")
})

// singup form handler
router.post("/signup", uploaderMiddleware.single('profileImg'), (req, res, next) => {

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

})

// login render

router.get("/login", isLoggedOut, (req, res, next) => {
    res.render("auth/login")
})

// login form (handling)
router.post("/login", (req, res, next) => {
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
            const { id } = req.session.currentUser._id
            res.redirect('/profile/:id')
        })
})

//logout
router.post('/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/'))
})


module.exports = router;


