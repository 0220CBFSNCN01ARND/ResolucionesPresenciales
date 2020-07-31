const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies");
const actorsRouter = require("./actors");
const genresRouter = require("./genres");
const apiRouter = require("./api");
const dashboardRouter = require("./dashboard");


router.use("/movies", moviesRouter);
router.use("/actors", actorsRouter);
router.use("/genres", genresRouter);

// localhost:3000/api
router.use("/api", apiRouter);

// Dashboard
router.use("/dashboard", dashboardRouter);

router.get("/", async function (req, res) {
    res.render("index");
});

module.exports = router;
