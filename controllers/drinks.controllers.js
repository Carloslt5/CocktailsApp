const cocktailApiHandler = require('../services/cocktail-api.service');
const User = require('../models/User.model');


const getAlcohol = (req, res, next) => {

    cocktailApiHandler
        .getAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getNonAlcohol = (req, res, next) => {

    cocktailApiHandler
        .getNonAlcoholic()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getRum = (req, res, next) => {

    cocktailApiHandler
        .getRum()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getVodka = (req, res, next) => {

    cocktailApiHandler
        .getVodka()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getGin = (req, res, next) => {

    cocktailApiHandler
        .getGin()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getTequila = (req, res, next) => {

    cocktailApiHandler
        .getTequila()
        .then(({ data }) => res.render('filterApi/cocktails-list-page', data))
        .catch(err => next(err))

}

const getDetails = (req, res, next) => {

    const { id } = req.params

    cocktailApiHandler
        .getById(id)
        .then(({ data }) => res.render('filterApi/cocktails-details', data))
        .catch(err => next(err))
}

const getFavorites = (req, res, next) => {

    const { id } = req.params
    const user = req.session.currentUser._id

    User
        .findByIdAndUpdate(user, { $push: { favorites: id } }, { new: true })
        .then(updateUser => {
            req.session.currentUser = updateUser
        })
        .then(() => res.redirect(`/cocktail-details/${id}`))
        .catch(err => next(err))
}


module.exports = {
    getAlcohol,
    getNonAlcohol,
    getRum,
    getVodka,
    getGin,
    getTequila,
    getDetails,
    getFavorites
}