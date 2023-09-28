import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
  id: Number,
  work_id: String,
  authors: String,
  original_publication_year: Number,
  original_title: String,
  language_code: String,
  average_rating: Number,
  ratings_count: Number,
  work_ratings_count: Number,
  work_text_reviews_count: Number,
  image_url: String,
});

export const bookModel = mongoose.model('books', bookSchema)