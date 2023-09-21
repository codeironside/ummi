const colors = require("colors");

const express = require("express");

const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errormiddleware");

const app = express();
//port  number
const port = process.env.port || 5099;

connectDB();
// app.use(helmet);

//middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));


app.use("/pass", require("./routes/user"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port ${port},${process.env.NODE_ENV} ......`.magenta.underline);
});
