import mongoose from "mongoose";

const bookschema = mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Book = mongoose.model('Book',bookschema);

export default Book;
