var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('*', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect('http://mp.weixin.qq.com/s?__biz=MzU4OTc0ODg3OA==&mid=100000009&idx=1&sn=1235ad2d148b5e137feb156e12c32661&chksm=7dc98ee84abe07fed30dab9bf0f9406f507205bbc6f33d225e0244d4a3332823341025bd5157#rd')
});

module.exports = router;
