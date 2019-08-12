const router = require("express").Router();
const Test = require('./test');

router.use('/test', Test);

module.exports = router;