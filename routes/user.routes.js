const express = require('express');
const router = express.Router();

const User = require('../models/User.model')
const Cocktail = require('../models/Cocktail.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const { getUserRole } = require('../utils/role-handling');


// User profile (render)
router.get("/", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { _id } = req.session.currentUser
    const promises = [
        Cocktail.find({ owner: { $eq: _id } }).populate('owner'),
        User.findById(_id)

    ]

    const userRole = getUserRole(req.session.currentUser)

    Promise
        .all(promises)
        .then(response => {

            const cocktail = response[0]
            const user = response[1]

            res.render('user/profile', { cocktail, user, userRole })

        })
        .catch(err => next(err))
})


//User profile edit (render)
router.get("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    res.render("user/edit", { user: req.session.currentUser })
})


User profile edit(handler)
router.post("/:id/edit", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), uploaderMiddleware.single('profileImg'), (req, res, next) => {

    const { id } = req.params
    const { name, lastName, email } = req.body

    if (req.file) {

        const { path: profileImg } = req.file

        User
            .findByIdAndUpdate(id, { name, lastName, email, profileImg })
            .then(() => {
                res.redirect("/profile")
            })
            .catch(err => next(err))
    } else {

        User
            .findByIdAndUpdate(id, { name, lastName, email })
            .then(() => {
                res.redirect("/profile")
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

//User profile delete (handler)
router.post("/:id/delete", isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))
})

//Change ROLE
// router.post('/:id/rol'), checkRoles('ADMIN'), (req, res, next) => {


// }


module.exports = router;

