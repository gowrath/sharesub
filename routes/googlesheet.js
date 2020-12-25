var express = require('express');
var router = express.Router();


/* GET calculator page. */
router.get('/', function(req, res, next) {
  res.render('googlesheet');
});

module.exports = router;
