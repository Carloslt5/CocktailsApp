const express = require('express');
const router = express.Router();

const Cocktail = require('../models/Cocktail.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')


// Create cocktail (render)
router.get("/profile/create-myCocktail", (req, res, next) => {
    res.render("myCocktail/create-myCocktail")
})

// //Create cocktail (handler)
router.post("/profile/create-myCocktail", uploaderMiddleware.single('strDrinkThumb'), (req, res, next) => {

    const { path: strDrinkThumb } = req.file
    const { strDrink, strAlcoholic, strInstructions,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4,
        strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5 } = req.body

    Cocktail
        .create({
            strDrink, strAlcoholic, strInstructions, strDrinkThumb,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4,
            strIngredient5, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5
        })
        .then(() => res.redirect('/profile'))
        .catch(err => console.log(err))
})



module.exports = router;