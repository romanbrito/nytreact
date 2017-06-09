import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

const Article = mongoose.model("Article", ArticleSchema);

export default Article;
