const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        min : [1,"The minium rating is 1"],
        max : [10, "The maximum rating is 10"]
    },
    pages : Number,
    genre : {
        type : String,
        default : "Other"
    }
},{timestamps: true})

module.exports = mongoose.model("books",booksSchema);