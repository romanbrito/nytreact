var express = require("express");
var router = express.Router();

router.get("/api/saved", function (req, res) {
  res.render("index");
});

router.post("/api/saved", function (req, res) {
  res.render("index");
});

// delete
router.post("/api/saved", function (req, res) {
  res.render("index");
});

module.exports = router;