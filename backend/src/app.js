const express = require("express");
const User = require("./routes/userRoute");
const Blog = require("./routes/blogRoute");
const ErrorHandler=require("./middlewares/error")
const router=express.Router()
const app = express();
const cookie=require('cookie-parser');
app.use(express.json());
app.use(cookie())

app.use(User);

app.use(Blog);


router.all("/*", function (req, res) {
    res.status(400).send({
      status: false,
      message: "Make Sure Your Endpoint is Correct !!!",
    });
  });
  
  app.use(ErrorHandler)

module.exports = app;