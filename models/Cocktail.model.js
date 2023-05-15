const { Schema, model } = require("mongoose");

const myCocktailSchema = new Schema(
    {
        idDrink: String,
        strDrink: String,
        strAlcoholic: String,
        strInstructions: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        strDrinkThumb: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy43lfswN_WIlHHSeFJZCSdQe6_VBiV438wdjG35HDtjfbRTSEsxV-S-wjylMh7qBkqg&usqp=CAU'
        },
        strIngredient1: {
            type: String,
            default: null,
            required: false
        },
        strIngredient2: {
            type: String,
            default: null,
            required: false
        },
        strIngredient3: {
            type: String,
            default: null,
            required: false
        },
        strIngredient4: {
            type: String,
            default: null,
            required: false
        },
        strIngredient5: {
            type: String,
            default: null,
            required: false
        },
        strMeasure1: {
            type: String,
            default: null,
            required: false
        },
        strMeasure2: {
            type: String,
            default: null,
            required: false
        },
        strMeasure3: {
            type: String,
            default: null,
            required: false
        },
        strMeasure4: {
            type: String,
            default: null,
            required: false
        },
        strMeasure5: {
            type: String,
            default: null,
            required: false
        }

    },
    {
        timestamps: true
    }
);

const MyCocktail = model("MyCocktail", myCocktailSchema);

module.exports = MyCocktail;
