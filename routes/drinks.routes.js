const express = require('express');
const router = express.Router();

const cocktailApiHandler = require('../services/cocktail-api.service');
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
// const { getUserRole } = require('../utils/role-handling');
const User = require('../models/User.model');
const cocktailApiHandler = require('../services/cocktail-api.service');

//Alcohol render
router.get("/alcohol", (req, res, next) => {

    cocktailApiHandler
        .getAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});


//Non Alcohol render
router.get("/non-alcohol", (req, res, next) => {

    cocktailApiHandler
        .getNonAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Rum render
router.get("/rum", (req, res, next) => {

    cocktailApiHandler
        .getRum()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Vodka render
router.get("/vodka", (req, res, next) => {

    cocktailApiHandler
        .getVodka()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Gin render
router.get("/gin", (req, res, next) => {

    cocktailApiHandler
        .getGin()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Tequila render
router.get("/tequila", (req, res, next) => {

    cocktailApiHandler
        .getTequila()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

});

//Alcohol render cocktail detail
router.get("/cocktail-details/:id", (req, res, next) => {

    const { id } = req.params

    cocktailApiHandler
        .getById(id)
        .then(({ data }) => res.render('filterApi/cocktails-details', data))
        .catch(err => next(err))
});

//Add favorites
// router.post('/:id/favorites', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), (req, res, next) => {

//     const { id } = req.params
//     const user = req.session.currentUser._id

//     User
//         .findByIdAndUpdate(id, { $push: { favorite: id } })
//         .then(() => 
//         res.send(req.session.currentUser))
//         .catch(err => next(err))
// })

// router.post('/:id/favorites', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), (req, res, next) => {

//     const { id } = req.params
//     const user = req.session.currentUser._id
//     //const cocktailApiHandler = CocktailApiHandler.data

//     const promises = [
//         User.findByIdAndUpdate(user, { $addToSet: { favorites: { data } } })
//         cocktailApiHandler.getById(id)
//     ]

//     Promise
//         .all(promises)
//         .then(response => {
//             const user = response[0]
//             const cocktail = response[1]

//             res.redirect('/profile', { user, cocktail })
//         })
//         .catch(err => next(err))
// })
// router.post('/:id/favorites', isLoggedIn, checkRoles('ADMIN', 'EDITOR'),
//  uploaderMiddleware.single('image'), (req, res, next) => {

//     const { id } = req.params
//     const user = req.session.currentUser._id

//     cocktailApiHandler
//         .findById(id)
//         .then(({ data }) => {
//             User
//                 .fi(user, { $addToSet: { favorites: { data } } })
//             res.send(req.session.currentUser)
//         })
//         .catch(err => next(err))
//     }

router.post('/:id/favorites', isLoggedIn, checkRoles('ADMIN', 'EDITOR'),
    uploaderMiddleware.single('image'), (req, res, next) => {

        const { id } = req.params
        const user = req.session.currentUser.

            cocktailApiHandler
            .findById(id)
            .then(({ data }) => {
                user.favorites.push({ data })
                res, send(user)

            })
            .catch(err => next(err))
    })
module.exports = router