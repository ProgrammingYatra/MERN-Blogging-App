const express = require("express");
const { authentication, authorization } = require("../Middleware/auth");

const {
  createBlog,
  getBlogs,
  putBlog,
  deleteBlog,
  blogByQuery,
} = require("../Controllers/blogController");

const router = express.Router();

router.route("/blogs").post(authentication, createBlog);

router.route("/blogs").get(authentication, getBlogs);

router.route("/blogs/:blogId").patch(authentication, authorization, putBlog);

router
  .route("/blogs/:blogId")
  .delete(authentication, authorization, deleteBlog);

router.route("/blogs/").delete(authentication, authorization, blogByQuery);

module.exports = router;
