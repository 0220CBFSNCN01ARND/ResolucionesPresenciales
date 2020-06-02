const controller = {
  index: (req, res) => {
    if (!req.session.color) {
      req.session.color = "white";
    }

    res.render("index", { color: req.session.color });
  },
  queColorEs: (req, res) => {
    res.send("El color es");
  },
  color: (req, res) => {
    req.session.color = req.body.color;

    if (req.body.color) {
      res.cookie("color", req.body.color, { maxAge: 60000 });
      console.log(res.cookie.color);
    }

    res.redirect("/");
  },
  borrar: (req, res) => {
    res.send("Borro color");
  },
};

module.exports = controller;
