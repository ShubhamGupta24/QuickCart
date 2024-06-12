require('dotenv').config();
const express = require("express");
// to resolve cross origin resources issues
const cors = require("cors")
const app = express();
const router = require("./routes/auth-route");
const productRoute = require("./routes/product-route");
const paymentRoute = require("./routes/payments-route");
const connectDb = require("./utils/db");


// Invoking the  error middleware
const errorMiddleware = require("./middlewares/error-middleware");
// Invoking the  contact from controller
const contactRoute = require("./routes/contact-route");

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
// Always use this middle ware before express.json or data parsing 
app.use(cors(corsOptions));
//MiddleWare to parse json data
app.use(express.json());


// Mount the Router: 
// To use the router in your main Express app,
//  you can "mount" it at a specific URL prefix
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/products", productRoute);
app.use("/api/payment", paymentRoute);



// MiddleWare to handle errors
app.use(errorMiddleware);


const PORT = 5000;


connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});