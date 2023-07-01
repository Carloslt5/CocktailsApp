const { getUserRole } = require('../utils/role-handling');
const { getDrinkesByIds, getUserDrinkes } = require('../utils/drinks/drinks.helpers');
const User = require('../models/User.model')


const profilePage = (req, res, next) => {

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
}

const profileEditPage = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => {
            res.render("user/edit", user)
        })
        .catch(err => next(err))

}

const handlerProfileEdit = (req, res, next) => {

    const { id } = req.params
    const { name, lastName, email } = req.body

    User
        .findByIdAndUpdate(id, { name, lastName, email, profileImg: req.file?.path })
        .then(() => {
            res.redirect("/profile")
        })
        .catch(err => next(err))

}

const userPage = (req, res, next) => {

    User
        .find()
        .then(allUsers => res.render('user/list', { allUsers }))
        .catch(err => console.log(err))
}

const userDetailsPage = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render('user/profile', { user }))
        .catch(err => next(err))
}

const userDelete = (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))
}

const userRole = (req, res, next) => {
    const { id } = req.params

    User
        .findByIdAndUpdate(id, { role: 'EDITOR' })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
}

module.exports = {
    profilePage,
    profileEditPage,
    handlerProfileEdit,
    userPage,
    userDetailsPage,
    userDelete,
    userRole
}