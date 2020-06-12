const express = require("express");
const router = express.Router();
const controllerMovies = require("../controllers/movieController");

/* GET home page. */
router.get("/", controllerMovies.index);

module.exports = router;