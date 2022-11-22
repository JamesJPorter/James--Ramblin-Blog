const router = require('express').Router();
const { User, Post } = require('../models');

//  TODO: Get All Posts 
router.get('/', async (req, res) => {
    // console.log('*******', req.session)
    try {
        //retrieve all posts from db
        const dbPostData = await Post.findAll({
            include: [User],
        });

        //serialize data retrieved
        const posts = dbPostData.map((post) => post.get({plain: true}));
        console.log("req.session", req.session)
        //respond with template to render along with data retrieved
        res.render('homepage', {posts, loggedin: req.session.loggedin});
    } catch (error) {
        res.status(500).json(error);
    }
});

//  TODO: Get single Posts 
router.get('/post/:id', async (req, res) => {
    res.send(`Render single post view along with the post with id ${req.params.id} retrieved from the db.`)
});

//  TODO: Login 
router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedin) {
            res.redirect('/');
          }
        res.render('login')
    }catch (err){
        res.status(400).json(err)
    }
});

router.post('/logout', async (req, res) => {
    if (req.session.loggedin) {
        // Remove the session variables
        req.session.destroy(() => {
          res.status(204).end();
          res.redirect('/');
        });
      } else {
        res.status(404).end();
      }
});

//  TODO: Signup 
router.get('/register', async (req, res) => {
    res.render('register');
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
})


module.exports = router;