const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Account = new Schema({
  id: {type: String, require: true},
  username: {type: String, require: true, unique: true},
  password: {type: String},
  lastName: {type: String},
  firstName: {type: String},
  email: {type: String, require: true, unique: true},
  listIdPosted: {type: Array},
  listPostReact: {type: Array},
}, {
  timestamps: true,
});

const collection = new mongoose.model("Collection", Account)

module.exports = collection