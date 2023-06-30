const express = require('express');
const router = express.Router();

const uploaderMiddleware = require('../middlewares/uploader.middleware')
const { isLoggedIn, checkRoles } = require('../middlewares/route-guard');
const { getAlcohol, getNonAlcohol, getRum, getVodka, getGin, getTequila, getDetails, getFavorites } = require('../controllers/drinks.controllers')

//Alcohol render
router.get("/alcohol", getAlcohol)

//Non Alcohol render
router.get("/non-alcohol", getNonAlcohol)

//Rum render
router.get("/rum", getRum)

//Vodka render
router.get("/vodka", getVodka)

//Gin render
router.get("/gin", getGin)

//Tequila render
router.get("/tequila", getTequila)

//Alcohol render cocktail detail
router.get("/cocktail-details/:id", isLoggedIn, getDetails)

//Add favorites 
router.post('/:id/favorites', isLoggedIn, checkRoles('ADMIN', 'EDITOR', 'BASIC'), uploaderMiddleware.single('image'), getFavorites)



module.exports = router