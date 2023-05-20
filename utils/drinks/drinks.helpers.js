const Cocktail = require("../../models/Cocktail.model")
const cocktailApiHandler = require("../../services/cocktail-api.service")

function getDrinkesByIds(ids) {
    const promises = ids.map((idDrink => {
        return cocktailApiHandler.getById(idDrink).then(response => {
            return response.data.drinks[0]
        })
    }))

    return Promise.all(promises)
}

function getUserDrinkes(user) {
    return Cocktail.find({ owner: { $eq: user._id } }).populate('owner')
}
module.exports = {
    getDrinkesByIds,
    getUserDrinkes
}