const mongoose = require('mongoose')


async function connectDB(){

    await mongoose.connect("mongodb+srv://Muza:Muza4464@backprac.cot2qko.mongodb.net/Muzammil")

    console.log("Connected to DB");
}

module.exports = connectDB;