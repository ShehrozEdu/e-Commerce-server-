const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: Object,
  discount: Object,
  tagline: Object,
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
