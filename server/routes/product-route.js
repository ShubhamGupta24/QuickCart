const express = require("express");
const productRoute = express.Router();
const productController = require("../controllers/product-controller");

productRoute.route("/getProducts").get(productController.getProducts);

module.exports = productRoute;