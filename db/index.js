const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb+srv://carloslt97:KanQNwko7ZivNy8G@cluster0.fvzrdac.mongodb.net/cocktailsapp";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
