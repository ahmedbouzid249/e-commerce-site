const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("mongoose connected"))
        .catch((err) => console.error(err));
}

module.exports = connectDB;