const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const errorMidleware = require("./middleware/error");

app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

//API
app.use("/api/v1",product);
app.use("/api/v1",user);

//middleware for error
app.use(errorMidleware);



module.exports = app;