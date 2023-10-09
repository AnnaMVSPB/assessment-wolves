const router = require('express').Router();

const apiSongsRouter = require('./api/apiSongs.route');
const apiExecutorsRouter = require('./api/apiExecutors.route');

router.use('/api/executors', apiExecutorsRouter);
router.use('/api/songs', apiSongsRouter);

module.exports = router;
