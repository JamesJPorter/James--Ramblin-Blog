const router = require("express").Router();
const { Post } = require("../../models");
const { Comment } = require("../../models");

//create new post
router.post("/createpost", async (req, res) => {
  try {
    console.log(
      "req.body title & content",
      req.body.newPostTitle,
      req.body.newPostContent
    );
    const newPost = await Post.create({
      post_name: req.body.newPostTitle,
      post_content: req.body.newPostContent,
      user_id: req.session.userId
    });
    res.status(200).json(newPost)
    console.log("req.body", req.body.newPostTitle, req.body.newPostContent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;