const express = require("express");
const router = express.Router();

//Components

const productController = require("../controllers/productController");
const UserController = require("../controllers/UserController");
//Products
router.post("/add-products", productController.addProducts);
router.get("/get-products", productController.getProducts);

//Users
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

module.exports = router;
