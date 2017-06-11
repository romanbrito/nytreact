var express = require("express");
var router = express.Router();

// Require Article schema
import Article from '../models/article';

// query MongoDB
router.get("/api", function (req, res) {
  res.send("api");
});

// save to MongoDB
router.post("/api", function (req, res) {

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
router.post("/api", function (req, res) {
  res.render("index");
});

module.exports = router;