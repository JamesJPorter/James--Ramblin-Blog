const router = require('express').Router();

const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api/login');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;