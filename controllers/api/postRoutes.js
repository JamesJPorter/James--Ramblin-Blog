const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//  TODO: Get single Posts 
// router.get('/:id', async (req, res) => {
//     console.log("req.params.id", req.params.id)
//     try {
//         const postDetail = await Post.findOne({
//             where: {id: req.params.id}, 
//             include: [
//                 {
//                   model: User,
//                 }
//               ],
//         })
//         console.log(postDetail)
//         if (postDetail) {
//             const serialPost = postDetail.get({plain: true})
//             console.log(serialPost)
//             res.render('postdetails', {
//                layout: 'main',
//                serialPost
//             });
//         }else {
//             res.redirect('/')
//             return
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// });

module.exports = router;