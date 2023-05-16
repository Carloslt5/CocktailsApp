const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')

// User profile (render)
router.get("/profile", (req, res, next) => {

    const { _id } = req.session.currentUser

    const promises = [
        Cocktail.find({ owner: { $eq: _id } }).populate('owner'),
        User.findById(_id)
    ]

    Promise
        .all(promises)
        .then(response => {

            const cocktail = response[0]
            const user = response[1]

            res.render('user/profile', { cocktail, user })

        })
        .catch(err => console.log(err))

})


//User profile edit (render)
router.get("/profile/:id/edit", (req, res, next) => {
    res.render("user/edit", { user: req.session.currentUser })
})


//User profile edit (handler)
router.post("/profile/:id/edit", uploaderMiddleware.single('profileImg'), (req, res, next) => {
    const { id } = req.params
    const { path: profileImg } = req.file
    const { name, lastName, email } = req.body

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

