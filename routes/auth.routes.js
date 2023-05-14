const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require('../models/User.model')
const { isLoggedOut } = require('../middlewares/route-guard')

// signup form (render)
router.get("/signup", (req, res, next) => {
    res.render("auth/signup")
})

// singup form handler
router.post("/signup", (req, res, next) => {

    const { name, lastName, email, plainPassword, profileImg } = req.body

    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(plainPassword, salt))
        .then(hashedPassword => User.create({ name, lastName, email, hashedPassword, profileImg }))
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

// login render

// router.get("/login", isLoggedOut, (req, res, next) => {
//     res.render("auth/login")
// })
// login form (handling)
// router.post("/login", (req, res, next) => {

//     const { email, password } = req.body

//     if (email.length === 0 || password.length === 0) {
//         res.render('auth/login', { errorMessage: 'Los campos son obligatorios' })
//         return
//     }

//     User
//         .findOne({ email })
//         .then(foundUser => {

//             if (!foundUser) {
//                 res.render('auth/login', { errorMessage: 'Usuario no reconocido' })
//                 return
//             }

//             if (!bcrypt.compareSync(password, foundUser.password)) {
//                 res.render('auth/login', { errorMessage: 'Contraseña incorrecta' })
//                 return
//             }

//             req.session.currentUser = foundUser
//             res.redirect('/')
//         })
// })

//logout
// router.get('/logout', (req, res, next) => {
//     req.session.destroy(() => res.redirect('/'))
// })




module.exports = router;


