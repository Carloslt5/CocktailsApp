const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')

// User profile (render)
router.get("/profile", (req, res, next) => {

    const { _id } = req.session.currentUser

    Cocktail
        .find({ owner: { $eq: _id } })
        .then(cocktailsFromDB => {
            User.findById(_id)
                .then(user => res.render('user/profile', { user, cocktailsFromDB }))
            // res.send(cocktailsFromDB)

        } // res.send(cocktailsFromDB)
            // res.render("user/profile", { user: req.session.currentUser }, cocktail)
            // if (cocktailsFromDB[0].owner == req.session.currentUser.id) {
            //     console.log(cocktaislFromDB)
            // }
        )
        .catch(err => console.log(err))
})


//User profile edit (render)
router.get("/profile/:id/edit", (req, res, next) => {
    res.render("user/edit", { user: req.session.currentUser })
})


//User profile edit (handler)
router.post("/profile/:id/edit", (req, res, next) => {
    const { name, lastName, email, profileImg } = req.body
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { name, lastName, email, profileImg })
        .then(userFound => {
            res.redirect("/profile")
        })
        .catch(err => console.log(err))

})

//User profile delete (handler)
router.post("/profile/:id/delete", (req, res, next) => {
    const { id } = req.params
    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
})



module.exports = router;

