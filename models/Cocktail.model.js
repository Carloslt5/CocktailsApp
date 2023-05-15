const { Schema, model } = require("mongoose");

const cocktailSchema = new Schema(
    {
        name: String,
        type: String,
        instructions: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        image: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCy43lfswN_WIlHHSeFJZCSdQe6_VBiV438wdjG35HDtjfbRTSEsxV-S-wjylMh7qBkqg&usqp=CAU'
        },
        ingredient1: {
            type: String,
            default: null,
            required: false
        },
        ingredient2: {
            type: String,
            default: null,
            required: false
        },
        ingredient3: {
            type: String,
            default: null,
            required: false
        },
        ingredient4: {
            type: String,
            default: null,
            required: false
        },
        ingredient5: {
            type: String,
            default: null,
            required: false
        },
        measure1: {
            type: String,
            default: null,
            required: false
        },
        measure2: {
            type: String,
            default: null,
            required: false
        },
        measure3: {
            type: String,
            default: null,
            required: false
        },
        measure4: {
            type: String,
            default: null,
            required: false
        },
        measure5: {
            type: String,
            default: null,
            required: false
        }

    },
    {
        timestamps: true
    }
);

const Cocktail = model("Cocktail", cocktailSchema);

module.exports = Cocktail;
