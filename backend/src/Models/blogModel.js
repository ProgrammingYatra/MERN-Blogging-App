const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required : [true,"Please Provide a Title"],
    },
    body: {
      type: String,
      required : [true,"Please Provide a Content"],
    },
    authorId: {
      type: objectId,
      ref: "Author",
      required : [true,"Please Provide a Author Id"],
    },
    tags: [String],
    category: {
      type: String,
      required : [true,"Please Provide a Category"],
    },
    subcategory: {
      type: [String],
    },
    deletedAt: {
      type: Date,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//__________________________ Exporting Blog Schema ___________________________________________

module.exports = new mongoose.model("Blog", blogSchema);
