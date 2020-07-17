const express = require("express"),
    bodyparser = require("body-parser"),
    jwt = require("jsonwebtoken"),
    app = express();

const config = { llave: "mirecontrasuperclavesecretaFB!" };

//Necesario para que funcionen los datos enviados desde el navegador
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Activamos el server
app.listen(3000, () => {
    console.log("El server inicio");
});

//Get request
app.get("/", (req, res) => {
    res.json({ message: "Get Funciona" });
});

//Post request
app.post("/autenticar", (req, res) => {
    if (req.body.username === "admin" && req.body.password === "123") {
        const token = jwt.sign({ nombre: "harold" },
            config.llave /*, {expiresIn: '10000'}*/
        );
        res.json({ message: "Autenticaste", token: token });
    } else {
        res.json({ message: "No Autenticaste", token: null });
    }
});

//Custom middleware
const rutaProtegida = express.Router();
rutaProtegida.use((req, res, next) => {
    const token = req.headers["token"];

    if (token) {
        jwt.verify(token, config.llave, (err, decoded) => {
            if (err) {
                res.json({ message: "Este token no esta activo" });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({ message: "Este token no esta activo" });
    }
});

//Ruta con middleware custom - solo personas con el token pueden acceder
app.get("/datos", rutaProtegida, (req, res) => {
    const datos = [
        { id: 1, nombre: "mauro" },
        { id: 2, nombre: "Malena" },
        { id: 3, nombre: "Viviana" },
    ];

    res.json(datos);
});