const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')

const uploaderMiddleware = require('../middlewares/uploader.middleware')


// Create cocktail (render)
router.get("/profile/create-cocktail", (req, res, next) => {
    res.render("cocktail/create-cocktail")
})

//Create cocktail (handler)
router.post("/profile/create-cocktail", uploaderMiddleware.single('image'), (req, res, next) => {
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
        .catch(err => console.log(err))
})

//cocktail details
router.get('/profile/cocktail-details/:id', (req, res, next) => {
    const { id } = req.params

    Cocktail
        .findById(id)
        .populate('owner')
        .then(cocktail => res.render('cocktail/details-cocktail', cocktail))
        .catch(err => console.log(err))
})

//edit cocktail (render)
router.get('/edit-cocktail'), (req, res, next) => {
    const { id } = req.params
    res.send('HOLAAAAA')
    // Cocktail
    //     .findById(id)
    //     .then(cocktail => res.render('cocktail/edit-cocktail'))
    //     .catch(err => console.log(err))

}

module.exports = router;