const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const userRoutes = require('./user');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/postRoutes', postRoutes);
router.use('/comment', commentRoutes)

module.exports = router;