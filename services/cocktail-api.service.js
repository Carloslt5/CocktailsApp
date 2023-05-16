const axios = require('axios')

class CocktailApiHandler {

    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
        })
    }

    getAlcoholic() {
        return this.axiosApp.get('filter.php?a=Alcoholic')
    }

    getNonAlcoholic() {
        return this.axiosApp.get('filter.php?a=Non_Alcoholic')
    }

    getRum() {
        return this.axiosApp.get('filter.php?i=Rum')
    }

    getVodka() {
        return this.axiosApp.get('filter.php?i=Vodka')
    }

    getGin() {
        return this.axiosApp.get('filter.php?i=Gin')
    }

    getTequila() {
        return this.axiosApp.get('filter.php?i=Tequila')
    }

}

const cocktailApiHandler = new CocktailApiHandler()

module.exports = cocktailApiHandler
