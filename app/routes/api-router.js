const express = require("express");
const router = express.Router();

//Components

const productController = require("../controllers/productController");
const UserController = require("../controllers/UserController");
//Products
router.post("/add-products", productController.addProducts);
router.get("/get-products", productController.getProducts);
router.get("/get-product-by-id/:id", productController.getProductByID);

//Users
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

module.exports = router;
