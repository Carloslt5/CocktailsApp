require("dotenv").config()
require("./db")

const { updateLoggedUser } = require("./middlewares/loggedUser.middleware")

const express = require("express")
const app = express()

require("./config")(app)
require("./config/session.config")(app)

app.use(updateLoggedUser)

app.locals.siteTitle = `CocktailsApp`

app.use('/', require('./routes'))
require("./error-handling")(app)

module.exports = app
