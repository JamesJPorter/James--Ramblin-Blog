const router = require("express").Router();
const { Post } = require("../../models");
const { Comment } = require("../../models");

// comment on post 
router.post("/", async (req, res) => {
    try {
        console.log("req.session.userId", req.session.userId)
        const newComment = await Comment.create({
        comment_text: req.body.commentContent,
        post_id: req.body.postId,
        user_id: req.session.userId
      });
      // console.log('newcomment', newComment)
      res.status(200).json(newComment)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;