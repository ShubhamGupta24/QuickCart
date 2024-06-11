const express = require("express");
const router = express.Router();

const contactForm = require("../controllers/contact-controller");

const validate = require("../middlewares/validate_middleware");
const formValidator = require("../validators/form-validators");

console.log("hi")
router
    .route("/contact")
    .post(validate(formValidator), contactForm);

module.exports = router;