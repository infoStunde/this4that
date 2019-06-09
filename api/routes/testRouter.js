var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('testtest test estes' + new Date());
});

module.exports = router;