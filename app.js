require("dotenv").config();

require("./db");

const express = require("express");

const hbs = require("hbs");
const app = express();

require("./config")(app);
require("./config/session.config")(app) // session config


const capitalize = require("./utils/capitalize");
const projectName = "cocktailsApp";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/", userRoutes);

const myCocktailRoutes = require("./routes/myCocktail.routes");
app.use("/", myCocktailRoutes);

require("./error-handling")(app);

module.exports = app;
