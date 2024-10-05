const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World! & Phung Thai Nguyen");
});

router.get("/abc", (req, res) => {
  res.send("ABC");
});

router.get("/nguyen", (req, res) => {
  // res.send('<h1>nguyen phung thai</h1>')
  res.render("example.ejs");
});

module.exports = router;
