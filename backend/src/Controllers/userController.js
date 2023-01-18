//______________________ Import or Require Modules ________________________________

const authorModel = require("../Models/authorModel");
const validator = require("../Validator/Validation");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("../Middleware/catchAsyncError");

//______________________ post api : Create Author ________________________________

exports.createAuthor = catchAsyncError(async function (req, res) {
  const data = req.body;
  const { title, email, password } = data;

  if (!title) {
    return res.status(400).send({ status: false, msg: "title is required" });
  } else {
    if (title != "Mr" || title != "Mrs" || title != "Miss") {
      return res
        .status(400)
        .send({ status: false, msg: "title can be Mr. Miss or Mrs " });
    }
  }

  if (!validator.isValidEmail(email)) {
    return res
      .status(400)
      .send({ status: false, msg: "Please Enter Valid Email Address" });
  }
  const isEmailAlreadyUsed = await authorModel.findOne({ email });
  if (isEmailAlreadyUsed) {
    return res.status(400).send({
      status: false,
      msg: "Oooh...Email already Registered. Please Login...",
    });
  }

  if (!validator.isValidPassword(password)) {
    return res.status(400).send({
      status: false,
      msg: "Password is required and Should Contain Min 8 character and 1 Special Symbol",
    });
  }
  const newAuthor = await authorModel.create(data);

  res.status(201).send({
    status: true,
    msg: "Author Created successfully....",
    data: newAuthor,
  });
});

//______________________ post api : Login Author ________________________________

exports.logInUser = catchAsyncError(async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (!validator.isValidEmail(email)) {
    return res.status(400).send({ status: false, msg: "Email is required" });
  }

  if (!validator.isValidPassword(password)) {
    return res.status(400).send({ status: false, msg: "password is required" });
  }

  const author = await authorModel.findOne({ email, password });
  if (!author) {
    return res
      .status(401)
      .send({ status: false, msg: "Invalid login credentials" });
  }
  const token = jwt.sign(
    { authorId: author._id.toString() },
    process.env.SECRET_KEY
  );
  return res.status(200).send({ status: true, data: { token } });
});
