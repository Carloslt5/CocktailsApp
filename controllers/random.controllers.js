const cocktailApiHandler = require('../services/cocktail-api.service');


const getRandom = (req, res, next) => {

    cocktailApiHandler
        .getRandom()
        .then(({ data }) => res.render('filterApi/cocktails-random', data))
        .catch(err => next(err))

}

module.exports = {
    getRandom
}