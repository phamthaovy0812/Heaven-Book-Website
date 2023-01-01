const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Post = new Schema({
  status: {type: Boolean, required: true},
  title: {type: String, required: true},
  img: {type: String, required: true},
  idReviewer: {type: String, required: true},
  Reviewername: {type: String, required: true},
  author: {type: String, required: true},
  category: {type: String, required: true},
  description: {type: String, required: true},
  content: {type: String, maxLength: 5000},
  listLike: {type: []},
  listDislike: {type: []},

}, {
  timestamps: true,
});

module.exports = mongoose.model("Post", Post);