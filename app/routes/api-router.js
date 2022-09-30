const express = require("express");
const router = express.Router();

//Components
const productController = require("../controllers/productController");
const electronicsController = require("../controllers/electronicsController");
const UserController = require("../controllers/UserController");
const StripePaymentController = require("../controllers/StripePaymentController");

//Products
router.post("/add-products", productController.addProducts);
router.get("/get-products", productController.getProducts);
router.get("/get-product-by-id/:id", productController.getProductByID);

//Electronics
router.post("/add-electronics", electronicsController.addElectronics);
router.get("/get-electronics", electronicsController.getElectronics);
router.get(
  "/get-electronics-by-id/:id",
  electronicsController.getElectronicsByID
);

//Users
router.post("/signup", UserController.signUp);
router.post("/login", UserController.login);

//stripe
router.post("/payment", StripePaymentController);

module.exports = router;
