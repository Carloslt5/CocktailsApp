const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')
const cocktailApiHandler = require('../services/cocktail-api.service');

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const { getUserRole } = require('../utils/role-handling');

// User profile (render)
router.get("/:id", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { _id } = req.session.currentUser
    const userFav = req.session.currentUser.favorites

    const drinksPromises = userFav.map((idDrink => {
        return cocktailApiHandler.getById(idDrink).then(response => {
            return response.data.drinks[0]
        })
    }))

    const drinks = Promise.all(drinksPromises)

    const promises = [
        User.findById(_id),
        Cocktail.find({ owner: { $eq: _id } }).populate('owner'),
        drinks
    ]

    const userRole = getUserRole(req.session.currentUser)

    Promise
        .all(promises)
        .then(response => {

            const user = response[0]
            const cocktails = response[1]
            const drinks = response[2]

            res.render('user/profile', { cocktails, user, userRole, drinks })

        })
        .catch(err => next(err))
})


//User profile edit (render)
router.get("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    res.render("user/edit", { user: req.session.currentUser })
})


//User profile edit(handler)
router.post("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), uploaderMiddleware.single('profileImg'), (req, res, next) => {

    const { id } = req.params
    const { name, lastName, email } = req.body

    if (req.file) {

        const { path: profileImg } = req.file

        User
            .findByIdAndUpdate(id, { name, lastName, email, profileImg })
            .then(() => {
                res.redirect("/profile/:id")
            })
            .catch(err => next(err))
    } else {

        User
            .findByIdAndUpdate(id, { name, lastName, email })
            .then(() => {
                res.redirect("/profile/:id")
            })
            .catch(err => next(err))
    }

    //esto lo puso German para que refactoricemos si se puede
    // User
    //     .findByIdAndUpdate(id, { name, lastName, email, profileImg: req.file?.path })
    //     .then(() => {
    //         res.redirect("/profile")
    //     })
    //     .catch(err => next(err))


})

//Users list
router.get('/users/list', isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

    User
        .find()
        .then(allUsers => {
            res.render('user/list', { allUsers })
        })
        .catch(err => console.log(err))
})

// router.get("/:id", isLoggedIn, checkRoles('ADMIN'), (req, res, next) => {

//     const { id } = req.params

//     User
//         .findById(id)
//         .then(user => {
//             res.render('user/profile', { user })
//         })
//         .catch(err => next(err))
//     // res.render("user/profile", { user: req.session.currentUser })
// })

//User profile delete (handler)
router.post("/:id/delete", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))
})

//Change ROLE
// router.get('/:id/rol'), checkRoles('ADMIN'), (req, res, next) => {
//     res.render("/profile")
// }


module.exports = router;

