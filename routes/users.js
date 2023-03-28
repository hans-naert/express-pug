var express = require('express');
var util = require('util')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource'+util.inspect(req));
});

module.exports = router;
