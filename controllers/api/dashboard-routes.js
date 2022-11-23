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
    });
    res.status(200).json(newPost)
    console.log("req.body", req.body.newPostTitle, req.body.newPostContent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// comment on post 
router.post("/comment", async (req, res) => {
  try {
    console.log(
      "newComment & postId",
      newComment, postId
    );
    const newComment = await Comment.create({
      comment_text: req.body.newComment,
      post_id: req.body.newComment,
    });
    res.status(200).json(newPost)
    console.log("req.body", req.body.newPostTitle, req.body.newPostContent);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
