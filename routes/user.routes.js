const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
<<<<<<< HEAD
const Cocktail = require('../models/Cocktail.model')
=======
const uploaderMiddleware = require('../middlewares/uploader.middleware')
>>>>>>> 5ae100148951f3f793ef71eaf7aa9aa1fe406bc0

// User profile (render)
router.get("/profile", (req, res, next) => {

<<<<<<< HEAD
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
=======
    res.render("user/profile", { user: req.session.currentUser })
>>>>>>> 5ae100148951f3f793ef71eaf7aa9aa1fe406bc0
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

