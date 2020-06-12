const db = require("../database/models");

module.exports = {
    index: function(req, res, next) {
        // 1 Forma
        // db.sequelize.query("select * from actors").then((results) => {
        //     let actors = results[0];
        //     console.log(typeof actors[0].rating);
        //     res.render("movies/movies", { title: "Movies", datos: actors });
        // });
        // 2 Forma requiere modelo y no se olviden de nuestro GRAN secreto timestamps
        db.actors
            .findAll()
            .then((actors) =>
                res.render("movies/movies", { title: "Movies", datos: actors })
            );
    },
};