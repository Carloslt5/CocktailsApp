const express = require('express');
const router = express.Router();

const cocktailApiHandler = require('../services/cocktail-api.service');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render('index')

});


//Alcohol render
router.get("/alcohol", (req, res, next) => {

  cocktailApiHandler
    .getAlcoholic()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});


//Non Alcohol render
router.get("/non-alcohol", (req, res, next) => {

  cocktailApiHandler
    .getNonAlcoholic()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});

//Rum render
router.get("/rum", (req, res, next) => {

  cocktailApiHandler
    .getRum()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});

//Vodka render
router.get("/vodka", (req, res, next) => {

  cocktailApiHandler
    .getVodka()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});

//Gin render
router.get("/gin", (req, res, next) => {

  cocktailApiHandler
    .getGin()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});

//Tequila render
router.get("/tequila", (req, res, next) => {

  cocktailApiHandler
    .getTequila()
    .then(response => res.render('filterApi/cocktails-list-page', response.data))
    .catch(err => console.log(err))

});

//Alcohol render cocktail detail
router.get("/cocktail-details/:id", (req, res, next) => {
  const { id } = req.params

  cocktailApiHandler
    .getById(id)
    .then(response =>
      res.render('filterApi/cocktails-details', response.data)
    )
    .catch(err => console.log(err))

});


module.exports = router;


