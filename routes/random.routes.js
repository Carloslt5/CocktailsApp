const express = require('express');
const router = express.Router();

// const cocktailApiHandler = require('../services/cocktail-api.service');
// const uploaderMiddleware = require('../middlewares/uploader.middleware')
// const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
// const User = require('../models/User.model');
const { getRandom } = require('../controllers/random.controllers')

//Random render
router.get("/random", getRandom)


module.exports = router