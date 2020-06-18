//Requiero sequelize
const { Sequelize, DataTypes } = require("sequelize");

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
}, { timestamps: false });


// Delete optimo
Actors.destroy({
    where: { id: 51 }
}).then(() => {
    //Ejecuto la consulta
    Actors.findByPk(51)
        .then((users) => console.log(JSON.stringify(users)))
        .catch((error) => console.log(error));
})