//Requiero sequelize
const { Sequelize, DataTypes, DATE } = require("sequelize");

//Creo mi objecto para conectarme a la DB
const sequelize = new Sequelize("movies_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

//Pruebo si me puedo conectar
sequelize
    .authenticate()
    .then(() => {
        console.log("Estamos Conectados");
    })
    .catch(() => {
        console.log("No se conecto");
    });

//Preparo el modelo
const Actors = sequelize.define("actors", {
    id: { type: DataTypes.SMALLINT, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE },
}, { timestamps: false });

//Campos justos - obligatorios dado que son (not null) en la DB
//Actors.create({ "first_name": "harold", "last_name": "reyes" })

//Todos los campos
Actors.create({ "created_at": new Date(), "updated_at": null, "first_name": "Mauro", "last_name": "Ricardo", rating: 0.0, })

//Ejecuto la consulta
Actors.findAll({
        attributes: ["id", "first_name", "last_name", "rating", "created_at", "updated_at", ],

    })
    .then((users) => console.log(JSON.stringify(users)))
    .catch((error) => console.log(error));