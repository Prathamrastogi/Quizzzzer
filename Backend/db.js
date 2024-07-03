const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(console.log("connected with mongoose at "));
};

module.exports = connectToMongo;
