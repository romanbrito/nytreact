var express = require("express");
var router = express.Router();

// query MongoDB
router.get("/api", function (req, res) {
  res.send("api");
});

// save to MongoDB
router.post("/api", function (req, res) {
  let saveArticle = req.body;
  Article.create({
    saveArticle
  }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Saved Article');
    }
  })
});

// delete database
router.post("/api", function (req, res) {
  res.render("index");
});

module.exports = router;