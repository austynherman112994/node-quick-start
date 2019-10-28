var router = require('express').Router();

router.use('/', require('./projectRoutes'));
router.use('/', require('./taskRoutes'));

module.exports = router;
