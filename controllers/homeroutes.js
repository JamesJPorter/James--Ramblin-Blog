const router = require('express').Router();
const { User, Post, Comment } = require('../models');

//  TODO: Get All Posts 
router.get('/', async (req, res) => {
    console.log('*******', req.session)
    try {
        //retrieve all posts from db
        const dbPostData = await Post.findAll({
            include: [User]
        });

        //serialize data retrieved
        const posts = dbPostData.map((post) => post.get({plain: true}));
        // console.log(posts)
        console.log("req.session", req.session)
        //respond with template to render along with data retrieved
        res.render('homepage', {posts, loggedin: req.session.loggedin});
    } catch (error) {
        res.status(500).json(error);
    }
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

router.get('/:id', async (req, res) => {
    console.log("req.params.id", req.params.id)
    try {
        const postDetail = await Post.findOne({
            where: {id: req.params.id}, 
            include: [
                {
                  model: User, Comment
                }
              ],
        })
            console.log("postDetail", postDetail)
            const serialPost = postDetail.get({ plain: true })
            console.log("serialPost", serialPost)
            res.render('postdetails', {
               layout: 'main',
               serialPost
            });
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});



module.exports = router;