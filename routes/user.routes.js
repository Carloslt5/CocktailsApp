const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')

// User profile (render)
router.get("/profile", (req, res, next) => {

    res.render("user/profile", { user: req.session.currentUser })
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

