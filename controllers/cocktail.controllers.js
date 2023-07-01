const Cocktail = require('../models/Cocktail.model')
const User = require('../models/User.model')


const createCocktails = (req, res, next) => {
    res.render("cocktail/create-cocktail")
}

const handlerCreateCocktails = (req, res, next) => {

    const { _id: owner } = req.session.currentUser
    const { path: image } = req.file
    const {
        name,
        type,
        instructions,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
        measure1,
        measure2,
        measure3,
        measure4,
        measure5 } = req.body

    Cocktail
        .create({
            name, type, owner, instructions, image,
            ingredient1, ingredient2, ingredient3, ingredient4,
            ingredient5, measure1, measure2, measure3, measure4, measure5
        })
        .then(() => res.redirect('/profile'))
        .catch(err => next(err))

}

const cocktailsDetails = (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findById(id)
        .populate('owner')
        .then(cocktail => res.render('cocktail/details-cocktail', cocktail))
        .catch(err => next(err))
}

const editCocktails = (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findById(id)
        .then(cocktail => res.render("cocktail/edit-cocktail", cocktail))
        .catch(err => next(err))


}

const handlerEditCocktails = (req, res, next) => {

    const { id } = req.params
    const { name,
        type,
        instructions,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
        measure1,
        measure2,
        measure3,
        measure4,
        measure5 } = req.body

    Cocktail
        .findByIdAndUpdate(id, {
            name, type, instructions, image: req.file?.path,
            ingredient1, ingredient2, ingredient3, ingredient4,
            ingredient5, measure1, measure2, measure3, measure4,
            measure5
        })
        .then(() => res.redirect(`/profile/cocktail-details/${id}`))
        .catch(err => next(err))

}

const deleteCokctails = (req, res, next) => {

    const { id } = req.params

    Cocktail
        .findByIdAndDelete(id)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
}


module.exports = {
    createCocktails,
    handlerCreateCocktails,
    cocktailsDetails,
    editCocktails,
    handlerEditCocktails,
    deleteCokctails
}