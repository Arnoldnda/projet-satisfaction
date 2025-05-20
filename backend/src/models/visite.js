module.exports = (sequelize, DataTypes) => {
    return sequelize.define('visite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true , 
            autoIncrement: true 
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        satisfaction: {
            types: DataTypes.STRING,
            allowNull: false
        },
        commentaire: {
            types: DataTypes.TEXT,
            allowNull: true 
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}