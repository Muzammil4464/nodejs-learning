const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect("mongodb+srv://muzammilshaik1525p_db_user:deii9PzDubd0XOPp@complete-backend.4gg4ryg.mongodb.net/halley")

    console.log("Connected to DB");
}

module.exports = connectDB;
