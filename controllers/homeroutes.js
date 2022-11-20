const router = require('express').Router();
const { User } = require('../models');

//  TODO: Get All Posts 
router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err){
        res.status(500).json(err)
    }
});

//  TODO: Get single Posts 
router.get('/post/:id', async (req, res) => {
    res.send(`Render single post view along with the post with id ${req.params.id} retrieved from the db.`)
});

//  TODO: Login 
router.get('/login', async (req, res) => {
    try {
        // if (req.session.logged_in) {
        //     res.redirect('/');
        //   }
        res.render('login')
    }catch (err){
        res.status(400).json(err)
    }
});

//  TODO: Signup 
router.get('/register', async (req, res) => {
    res.render('register');
});


module.exports = router;