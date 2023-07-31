const mongoose = require("mongoose");
const color = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(
      `Mongodb connected Database ${mongoose.connection.db.databaseName}`
        .bgGreen.white
    );
  } catch (error) {
    console.log(`Mongodb server Issuse ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
