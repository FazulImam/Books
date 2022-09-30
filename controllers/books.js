const asyncHandler = require("../middlewares/async");
const Books = require("../models/Books");

exports.getBooks = asyncHandler(async (req,res,next) => {
    const books = await Books.find();
    res.status(200).json({
        success : true, data : books
    })
})

exports.getBook = asyncHandler(async(req,res,next) => {
    const book = await Books.find({_id : req.params.id});
    res.status(200).json({
        success : true, data : book
    })
})

exports.addBook = asyncHandler(async(req,res,next) => {
    const book = await Books.create(req.body);
    res.status(201).json({
        success : true, data : book
    })
})

exports.updateBook = asyncHandler(async(req,res,next) => {
    const book = await Books.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
    });
})

exports.deleteBook = asyncHandler(async(req,res,next) => {
    const book = await Books.findByIdAndDelete(req.params.id);
    req.status(200).json({
        success : true, data : book
    })
})