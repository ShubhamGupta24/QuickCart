const express = require("express");

// In Express.js, express.Router() is a mini Express application without all
// the server configurations but with the ability to define routes, middleware, 
// and even have its own set of route handlers. It allows you to modularize your routes 
// and middleware to keep your code organized and maintainable.
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
// middile-ware is validate 
const validate = require("../middlewares/validate_middleware");
const authValidator = require("../validators/auth-validators");
const authMiddleware = require("../middlewares/auth_middleware");


router.route("/").get(authControllers.home);
router
    .route("/register")
    .post(validate(authValidator.signupSchema), authControllers.register);
router
    .route("/login")
    .post(validate(authValidator.loginSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);


module.exports = router;