const ProductModel = require("../models/product");
const products = require("../resources/productData.json");
//demo

const productController = {
  addProducts: async (req, res) => {
    try {
      let result = await ProductModel.insertMany(products);
      res.status(200).send({
        status: true,
        message: "Products added successfully",
        result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
  getProducts: async (req, res) => {
    try {
      let result = await ProductModel.find();
      res.status(200).send({
        status: true,
        Products: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  },
};
module.exports = productController;
