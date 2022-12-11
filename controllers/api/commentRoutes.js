const router = require("express").Router();
const { Post } = require("../../models");
const { Comment } = require("../../models");

// comment on post 
router.post("/comment", async (req, res) => {
    try {
      console.log(
        "newComment & postId",
        commentContent, postId, req.session.userId
      );
      const newComment = await Comment.create({
        comment_text: req.body.commentContent,
        post_id: req.body.postId,
        user_id: req.session.userId
      });
      console.log('newcomment', newComment)
      res.status(200).json(newPost)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;