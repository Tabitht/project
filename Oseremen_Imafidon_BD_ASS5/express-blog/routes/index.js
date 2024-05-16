var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  let rawdata = fs.readFileSync('./database/posts.json');

  let data = JSON.parse(rawdata);

  let navigation_link = [...new Set(data.map(post => post.category).sort())]


  res.render('blog', {
    title: 'She Code Queens',
    links: navigation_link,
    posts: data.filter(post => ! post.is_featured),
    featuredPosts: data.filter(post => post.is_featured)

});

});

module.exports = router;
