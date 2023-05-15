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

    // getOneCharacter(characterId) {
    //     return this.axiosApp.get(`/characters/${characterId}`)
    // }

    // saveCharacter(characterInfo) {
    //     return this.axiosApp.post(`/characters`, characterInfo)
    // }

    // editCharacter(characterId, characterInfo) {
    //     return this.axiosApp.put(`/characters/${characterId}`, characterInfo)
    // }
}

const cocktailApiHandler = new CocktailApiHandler()

module.exports = cocktailApiHandler