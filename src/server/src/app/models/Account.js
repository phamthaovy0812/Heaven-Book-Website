const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Account = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true},
  profile_name: { type: String, maxLength: 255 },
  phonenumber: { type: String, maxLength: 255},
  email: { type: String, maxLength: 255},
  type: { type: String }, 
}, {
  timestamps: true,
});

module.exports = mongoose.model("Account", Course);