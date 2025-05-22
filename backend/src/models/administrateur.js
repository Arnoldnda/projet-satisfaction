module.exports = (sequelize, DataTypes) => {
    return sequelize.define('administrateur', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwd: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}