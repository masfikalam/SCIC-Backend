// dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/usr_routes");
const productRouter = require("./routes/prd_routes");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
mongoose.connect(
  process.env.MONGO_LINK,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => console.log(err ? err : "DB connected successfully")
);

// application routes
app.use("/user", userRouter);
app.use("/products", productRouter);

// export app
module.exports = app;
