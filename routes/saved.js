var express = require("express");
var router = express.Router();

// query MongoDB
router.get("/api/saved", function (req, res) {
  res.send("api/saved");
});

// save to MongoDB
router.post("/api/saved", function (req, res) {
  res.render("index");
});

// delete database
router.post("/api/saved", function (req, res) {
  res.render("index");
});

module.exports = router;