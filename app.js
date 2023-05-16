require("dotenv").config();

require("./db");

const express = require("express");
const { loggedUser } = require("./middlewares/loggedUser.middleware");


const hbs = require("hbs");
const app = express();

require("./config")(app);
require("./config/session.config")(app)


app.use(loggedUser)

app.locals.siteTitle = `CocktailsApp`;


require("./routes")(app)
require("./error-handling")(app);

module.exports = app;
