const mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Defining Schema
const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    authors: {
        type: String,
        trim: true,
        required: "Authors is Required"
    },
    description: {
        type: String,
        trim: true,
        required: "Description is Required"
    },
    image: {
        type: String,
        trim: true,
        required: "Image is Required"
    },
    link: {
        type: String,
        trim: true,
        required: "Link is Required"
    }
});

// Creating book model
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;