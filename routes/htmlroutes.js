// const router = require("../../Excercise28/routes/htmlroutes");
const router = require("express").Router();
const path = require("path");

// ("../../homework/Excercise35/routes/htmlroutes");
// my thinking is that the absolute path is wrong.

// module.exports = function (req, res) {
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;

//use router, route to the proper path

// public/index.html
