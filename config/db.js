const mongoose = require("mongoose");

const connectDB = async() => {
    const conn = mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    console.log(`Connection on ${conn.connection.host}`);
}

module.exports = connectDB;