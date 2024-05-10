var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let navigation_link =
   ['Basic Industries', 'Consumer Services', 'Technology', 'Health Care', 'BioTech' ];

  let rawdata = fs.readFileSync('./database/posts.json');

  let posts = JSON.parse(rawdata);

  let featuredPosts = posts.filter('is_featured')

  res.render('blog', {
    title: 'She Code Queens',
    links: navigation_link,
    posts: posts
});

});

module.exports = router;
