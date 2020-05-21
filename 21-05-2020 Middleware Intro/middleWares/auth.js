const authMiddleware = (req, res, next) => {
    //console.log(`Antes auth`);
    if (req.query.admin === "true") {
        next();
    } else {
        res.send("ERROR: No eres Administrador");
    }
    //console.log(`Despues auth`);
};

module.exports = authMiddleware;