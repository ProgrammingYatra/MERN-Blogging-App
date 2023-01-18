//______________________ Import or Require Modules ________________________________

const mongoose = require("mongoose");

//____________________________ Creating Schema _____________________________________

const authorSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please Provide a First Name"],
      trim: true,
    },
    lname: {
      type: String,
      required: [true, "Please Provide a Last Name"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Please Provide a Title"],
      enum: ["Mr", "Mrs", "Miss"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please Provide a Email"],
    },
    password: {
      type: String,
      required: [true, "Please Provide a Password"],
    },
  },
  { timestamps: true }
);

//__________________________ Exporting Author Schema ___________________________________________

module.exports = new mongoose.model("Author", authorSchema);
