var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

/* GET users listing. */

router.get("/login", function(req, res, next) {
    res.render("login");
});
router.post(
    "/login", [
        check("user")
        .isEmail()
        .withMessage("No es un email")
        .isLength({ min: 8 })
        .withMessage("No posee la longitud adecuada")
        .custom((value) => {
            return value === "harold";
        })
        .withMessage("Vos no sos harold"),
    ],
    function(req, res, next) {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //return res.status(422).json({ errors: errors.array() });
            res.render("error", { errores: errors.array() });
        } else {
            console.log(req.body);
            res.send("post login");
        }
    }
);

module.exports = router;