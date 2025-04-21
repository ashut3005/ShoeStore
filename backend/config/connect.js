
require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(process.env.URL)
    .then(()=>{
        console.log("Connected");
    })
    .catch((err)=>{
        console.error(err);
        console.log("NOt connected")
    })
}

module.exports = connectDB;