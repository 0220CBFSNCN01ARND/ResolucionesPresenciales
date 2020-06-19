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

//Preparo el modelo movies
const movies = sequelize.define("movies", {
    id: { type: DataTypes.SMALLINT, primaryKey: true },
    title: DataTypes.STRING,
    awards: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    release_date: DataTypes.DATE
}, { timestamps: false });


//Preparo el modelo movies
const genres = sequelize.define("genres", {
    id: { type: DataTypes.SMALLINT, primaryKey: true },
    name: DataTypes.STRING,
    ranking: DataTypes.DECIMAL,
    active: DataTypes.SMALLINT
}, { timestamps: false });



//De uno a muchos
genres.hasMany(movies, { as: "peliculas", foreignKey: "genre_id" });
genres.findAll({
        include: {
            model: movies,
            as: 'peliculas'
        }
    })
    .then((users) => console.log(JSON.stringify(users)))
    .catch((error) => console.log(error));

// de muchos a uno
movies.belongsTo(genres, { as: "genero", foreignKey: "genre_id" });
movies.findAll({
        include: {
            model: genres,
            as: 'genero'
        }
    })
    .then((users) => console.log(JSON.stringify(users)))
    .catch((error) => console.log(error));