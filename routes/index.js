var express = require('express');
var router = express.Router();

var renderData = {
  title: "Share Sub"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', renderData);
});

module.exports = router;
