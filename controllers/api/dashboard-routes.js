const router = require('express').Router();
const { Post } = require('../../models')

//create new post
router.post('/dashboard', async (req, res) => {
    try {
      const newPost = await Post.create({
        post_name: req.body.username,
        post_content: req.body.password
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedin = true;
        console.log(newUser)
        res.status(200).json(newUser);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

module.exports = router;