const router = require('express').Router();
const { Post } = require('../../models')

//create new post
router.post('/createpost', async (req, res) => {
    try {
        console.log("req.body title & content", req.body.postTitle, res.body.postTitle)
      const newPost = await Post.create({
        post_name: req.body.postTitle,
        post_content: req.body.postContent
      });
      console.log(newPost)
      console.log('req.body', req.body.postTitle, req.body.postContent)
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

module.exports = router;