const express = require("express");

const {
  createBlog,
  getBlogs,
  putBlog,
  deleteBlog,
  blogByQuery,
} = require("../Controllers/blogController");
const { isAuthenticate, authorizeRoles } = require("../middlewares/auth");

const router = express.Router();

router
  .route("/blogs")
  .post(isAuthenticate, createBlog)
  .get(isAuthenticate, getBlogs);

router
  .route("/blogs/:blogId")
  .delete(isAuthenticate, deleteBlog)
  .patch(isAuthenticate, authorizeRoles("admin"), putBlog);

router
  .route("/blogs/")
  .delete(isAuthenticate, authorizeRoles("admin"), blogByQuery);

module.exports = router;
