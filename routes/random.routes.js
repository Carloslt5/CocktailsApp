const express = require('express');
const router = express.Router();

const cocktailApiHandler = require('../services/cocktail-api.service');
const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const User = require('../models/User.model');


//Random render
router.get("/random", (req, res, next) => {

    cocktailApiHandler
        .getRandom()
        .then(({ data }) => res.render('filterApi/cocktails-random', data))
        .catch(err => next(err))

});


module.exports = router