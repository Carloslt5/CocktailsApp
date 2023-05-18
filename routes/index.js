module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const drinksRoutes = require("./drinks.routes");
    app.use("/", drinksRoutes);

    const randomRoutes = require("./random.routes");
    app.use("/", randomRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

    const userRoutes = require("./user.routes");
    app.use("/profile", userRoutes);

    const cocktailRoutes = require("./cocktail.routes");
    app.use("/", cocktailRoutes);

}
