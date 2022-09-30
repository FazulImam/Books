const express = require("express");

const {getBooks,getBook,addBook,updateBook,deleteBook} = require("../controllers/books");

const router = express.Router();

router.route("/").get(getBooks).post(addBook);
router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;