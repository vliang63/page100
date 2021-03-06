"user script";
var mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");


var connection = mongoose.createConnection("mongodb://user:wemakeawesomeshit@ds051110.mongolab.com:51110/page100");
autoIncrement.initialize(connection);

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  image: String,
  sample: String,
  amazonLink: String
});

BookSchema.plugin(autoIncrement.plugin, "Book");

module.exports = mongoose.model("Book", BookSchema);
