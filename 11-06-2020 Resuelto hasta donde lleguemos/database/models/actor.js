module.exports = (sequelize, DataTypes) => {
    const actors = sequelize.define(
        "actors", {
            id: { type: DataTypes.SMALLINT, primaryKey: true },
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            rating: DataTypes.DECIMAL,
            created_at: { type: DataTypes.DATE },
            updated_at: { type: DataTypes.DATE },
        }, { timestamps: false }
    );

    return actors;
};