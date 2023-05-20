const express = require('express');
const router = express.Router();

const User = require('../models/User.model')

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const { getUserRole } = require('../utils/role-handling');
const { getDrinkesByIds, getUserDrinkes } = require('../utils/drinks/drinks.helpers');

// User profile (render)
router.get("/", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const currentUser = req.session.currentUser
    const userFav = currentUser.favorites

    const favDrinks = getDrinkesByIds(userFav)

    const myDrinks = getUserDrinkes(currentUser)

    return Promise.all([favDrinks, myDrinks]).then(responses => {
        res.render('user/profile', {
            favDrinks: responses[0],
            myDrinks: responses[1],
            user: currentUser,
            userRole: getUserRole(currentUser),
        })
    }).catch(err => next(err))
})



//User profile edit (render)
router.get("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => {
            res.render("user/edit", user)
        })
        .catch(err => next(err))

})


//User profile edit(handler)
router.post("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), uploaderMiddleware.single('profileImg'), (req, res, next) => {

    const { id } = req.params
    const { name, lastName, email } = req.body

    User
        .findByIdAndUpdate(id, { name, lastName, email, profileImg: req.file?.path })
        .then(() => {
            res.redirect("/profile")
        })
        .catch(err => next(err))

})

//Users list
router.get('/users', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

    User
        .find()
        .then(allUsers => res.render('user/list', { allUsers }))
        .catch(err => console.log(err))
})

router.get("/:id", isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/profile', { user }))
        .catch(err => next(err))
})

//User profile delete (handler)
router.post("/:id/delete", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))
})

//Change ROLE
router.post('/:id/role', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { role: 'EDITOR' })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})




module.exports = router;

