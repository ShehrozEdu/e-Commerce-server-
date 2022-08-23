const express = require("express");
const router = express.Router();

//Components

const productController = require("../controllers/productController");

router.post("/add-products", productController.addProducts);
router.get("/get-products", productController.getProducts);
module.exports = router;
