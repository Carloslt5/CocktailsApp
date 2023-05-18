const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard')


// Create cocktail (render)
router.get("/profile/create-cocktail/form", isLoggedIn, checkRoles('ADMIN', 'EDITOR'), (req, res, next) => {
    res.render("cocktail/create-cocktail")
})

//Create cocktail (handler)
router.post("/profile/create-cocktail/form", isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), (req, res, next) => {

    const { _id: owner } = req.session.currentUser
    const { path: image } = req.file
    const { name, type, instructions,
        ingredient1, ingredient2, ingredient3, ingredient4,
        ingredient5, measure1, measure2, measure3, measure4, measure5 } = req.body

    Cocktail
        .create({
            name, type, owner, instructions, image,
            ingredient1, ingredient2, ingredient3, ingredient4,
            ingredient5, measure1, measure2, measure3, measure4, measure5
        })
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))
})

//cocktail details
router.get('/profile/cocktail-details/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findById(id)
        .populate('owner')
        .then(cocktail => res.render('cocktail/details-cocktail', cocktail))
        .catch(err => next(err))
})

//edit cocktail(render)
router.get('/edit-cocktail/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findById(id)
        .then(cocktail => res.render("cocktail/edit-cocktail", cocktail))
        .catch(err => next(err))
})

//edit cocktail(handler)
router.post('/edit-cocktail/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), (req, res, next) => {

    const { id } = req.params
    const { path: image } = req.file
    const { name, type, instructions,
        ingredient1, ingredient2, ingredient3, ingredient4,
        ingredient5, measure1, measure2, measure3, measure4,
        measure5 } = req.body

    Cocktail
        .findByIdAndUpdate(id, {
            name, type, instructions, image,
            ingredient1, ingredient2, ingredient3, ingredient4,
            ingredient5, measure1, measure2, measure3, measure4,
            measure5
        })
        .then(() => res.redirect(`/profile/cocktail-details/${id}`))
        .catch(err => next(err))
})

//Delete
router.post("/delete-cocktail/:id", (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


module.exports = router;