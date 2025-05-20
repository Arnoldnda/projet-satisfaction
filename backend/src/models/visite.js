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
            type: DataTypes.STRING,
            allowNull: false
        },
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: true 
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}