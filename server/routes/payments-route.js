const express = require("express");
const paymentRoute = express.Router();
const paymentController = require("../controllers/payment-controller");

paymentRoute.route("/makepayments").post(paymentController.payments);

module.exports = paymentRoute;