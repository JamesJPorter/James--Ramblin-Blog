const router = require('express').Router();

const dashboardRoutes = require('./dashboard-routes');
const userRoutes = require('./user');
const postRoutes = require('./postRoutes')

router.use('/user', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/postRoutes', postRoutes);

module.exports = router;