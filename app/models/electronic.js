const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electronicSchema = new Schema({
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: Object,
  discount: Object,
  tagline: Object,
  warranty: String,
  seller: String,
});

const ElectronicModel = mongoose.model("electronic", electronicSchema);
module.exports = ElectronicModel;
