const express = require("express");
const app = express();
const logginMiddleware = require("./middleWares/logging");
const authMiddleware = require("./middleWares/auth");

app.use(logginMiddleware);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", authMiddleware, (req, res) => {
    console.log("Accediste a usuarios");
    res.send("Users Page");
});

app.listen(3000, () => console.log("Server Started"));