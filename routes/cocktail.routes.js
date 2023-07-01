const express = require('express');
const router = express.Router();


const Cocktail = require('../models/Cocktail.model')

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard')
const { createCocktails, handlerCreateCocktails, cocktailsDetails, editCocktails, handlerEditCocktails, deleteCokctails } = require('../controllers/cocktail.controllers')


// Create cocktail (render)
router.get("/profile/create-cocktail/form", isLoggedIn, checkRoles('ADMIN', 'EDITOR'), createCocktails)

//Create cocktail (handler)
router.post("/profile/create-cocktail/form", isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), handlerCreateCocktails)

//cocktail details
router.get('/profile/cocktail-details/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), cocktailsDetails)

//edit cocktail(render)
router.get('/edit-cocktail/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), editCocktails)

//edit cocktail(handler)
router.post('/edit-cocktail/:id', isLoggedIn, checkRoles('ADMIN', 'EDITOR'), uploaderMiddleware.single('image'), handlerEditCocktails)

//Delete
router.post("/delete-cocktail/:id", deleteCokctails)


module.exports = router;