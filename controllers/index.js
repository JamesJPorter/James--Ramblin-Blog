const router = require('express').Router();

const homeRoutes = require('./api/homeroutes');

router.use('/', homeRoutes);

module.exports = router;