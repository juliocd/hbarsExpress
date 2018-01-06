var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Oxford', port:process.env.PORT });
});

router.get('/table', function(req, res, next) {
    res.render('table', { title: 'Oxford', port:process.env.PORT });
});

module.exports = router;