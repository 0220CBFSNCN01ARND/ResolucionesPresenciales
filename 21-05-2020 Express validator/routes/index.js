const express = require("express");

const homeRouter = require("./home");
const usersRouter = require("./users");
const loginRouter = require("./login");

const routerGlobales = express.Router();

routerGlobales.use(homeRouter).use(usersRouter).use(loginRouter);

module.exports = routerGlobales;