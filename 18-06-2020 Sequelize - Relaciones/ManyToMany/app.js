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
}, { timestamps: false }); //Ojo al piojo timestamps

const Episodes = sequelize.define("episodes", {
    id: { type: DataTypes.SMALLINT, primaryKey: true },
    release_date: DataTypes.DATE,
    rating: DataTypes.DECIMAL,
}, { timestamps: false }); //Ojo al piojo timestamps


Actors.belongsToMany(Episodes, { as: 'episodios', through: "actor_episode", foreignKey: 'actor_id', otherKey: 'episode_id', timestamps: false })
Episodes.belongsToMany(Actors, { as: 'actores', through: "actor_episode", foreignKey: 'episode_id', otherKey: 'actor_id', timestamps: false })


//Forma 1
// Actors.findAll({ include: 'episodios' }).then(datos => {
//     console.log(JSON.stringify(datos))
// })

//Forma 2
Actors.findAll({ // This works, passing the alias
    include: {
        model: Episodes,
        as: 'episodios'
    }
}).then(datos => {
    console.log(JSON.stringify(datos))
});