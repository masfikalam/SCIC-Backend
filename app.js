// dependencies
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/usr_routes");
const productRouter = require("./routes/prd_routes");
const { upload, config } = require("./controller/file_controller");
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
app.use("/upload", config.single("user_file"), upload);
app.use("/public", express.static(path.join(__dirname, "public")));

// export app
module.exports = app;
