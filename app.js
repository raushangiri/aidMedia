const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("./db/connection");
const path = require("path");
const cookieParser = require("cookie-parser");

const registration = require("./modal/registrationSchema");
app.use(express.json());
app.use(cookieParser());

// router page required here
app.use(require("./router/auth"));

//2nd step
const PORT = process.env.PORT || 7000;

app.use(express.static(path.join(__dirname, "./FrontEnd/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./FrontEnd/build/index.html"));
});
// //3rd step

app.listen(PORT, () => {
  console.log(`Application running at port:${PORT}`);
});
