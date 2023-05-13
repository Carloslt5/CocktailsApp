const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs')
const saltRounds = 10

const User = require('../models/User.model')

// signup form (render)
router.get("/singup", (req, res, next) => {
    res.render("auth/signup")
})

// singup form handler

// router.post("/registro", (req, res, next) => {

//     const { username, email, plainPassword } = req.body

//     bcrypt
//         .genSalt(saltRounds)
//         .then(salt => bcrypt.hash(plainPassword, salt))
//         .then(hashedPassword => User.create({ username, email, password: hashedPassword }))
//         .then(() => res.redirect('inicio-sesion'))
//         .catch(err => next(err))
// })

// login render

// router.get("/inicio-sesion", isLoggedOut, (req, res, next) => {
//     res.render("auth/login")
// })
// login handler

// logout


module.exports = router;


