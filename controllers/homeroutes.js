const router = require('express').Router();
const { User, Post } = require('../models');

//  TODO: Get All Posts 
router.get('/', async (req, res) => {
    console.log('*******', req.session)
    try {
        //retrieve all posts from db
        const dbPostData = await Post.findAll({
            include: [User],
        });

        //serialize data retrieved
        const posts = dbPostData.map((post) => post.get({plain: true}));

        //respond with template to render along with data retrieved
        res.render('homepage');
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
        if (req.session.logged_in) {
            res.redirect('/');
          }
        res.render('login')
    }catch (err){
        res.status(400).json(err)
    }
});

router.get('/logout', async (req, res) => {
    try {
        
    } catch (err) {
        res.status(400).json(err)
    }
});

//  TODO: Signup 
router.get('/register', async (req, res) => {
    res.render('register');
});


module.exports = router;