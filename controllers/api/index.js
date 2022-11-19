const router = require('express').Router();

// const dashboardRoutes = require('././dashboard-routes');
const userRoutes = require('./user');

router.use('/user', userRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;