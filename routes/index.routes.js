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
    .then(response => res.render('filterApi/alcohol', response.data))
    .catch(err => console.log(err))

});


//Non Alcohol render
router.get("/non-alcohol", (req, res, next) => {

  cocktailApiHandler
    .getNonAlcoholic()
    .then(response => res.render('filterApi/non-alcohol', response.data))
    .catch(err => console.log(err))

});

//Rum render
router.get("/rum", (req, res, next) => {

  cocktailApiHandler
    .getRum()
    .then(response => res.render('filterApi/rum', response.data))
    .catch(err => console.log(err))

});


module.exports = router;


