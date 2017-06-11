var express = require("express");
var router = express.Router();

import methodOverride from 'method-override';
// override with POST having ?_method=DELETE
router.use(methodOverride("_method"));

// Require Article schema
import Article from '../models/article';

// This is the route we will send GET requests to retrieve our most recent saved articles
// We will call this route the moment our page gets rendered
router.get('/api', (req,res) => {
  Article.find({}).exec((err, doc)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});
// save to MongoDB
router.post("/api", function (req, res) {

  console.log("post route");

  var result = {};
  result.title = req.body.headline.main;
  result.date = req.body.pub_date;
  result.url = req.body.web_url;

  var entry = new Article(result);

  entry.save((err, savedArt) => {
    if (err) {
      console.log(err)
    } else {
      console.log("saved article posted")
      //res.redirect("/");
    }
  })
});

// delete database
router.delete("/api", function (req, res) {
  console.log("delete route yes!!!");
  Article.findByIdAndRemove(req.body.articleID);
});

module.exports = router;