const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Post = new Schema({
  text: { type: String, required: true },
  img: { type: String, maxLength: 255 },
  category: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Post", Post);