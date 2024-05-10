var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let rawdata = fs.readFileSync('./database/posts.json');

  let posts = JSON.parse(rawdata);

  let navigation_link = [...new Set(posts.map(post => post.category))]

  let featuredPosts = posts.filter(post => post.is_featured)

  res.render('blog', {
    title: 'She Code Queens',
    links: navigation_link,
    posts: posts
});

});

module.exports = router;
