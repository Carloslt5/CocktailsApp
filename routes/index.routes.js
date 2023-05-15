const express = require('express');
const router = express.Router();

const cocktailApiHandler = require('../services/cocktail-api.service');


/* GET home page */
router.get("/", (req, res, next) => {
  res.render('index')

});

router.get("/alcohol", (req, res, next) => {

  cocktailApiHandler
    .getAlcoholic()
    .then(response => res.render('filterApi/alcohol', response.data))
    .catch(err => console.log(err))

});


module.exports = router;
