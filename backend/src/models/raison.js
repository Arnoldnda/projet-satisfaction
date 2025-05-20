module.exports = (sequelize, DataTypes) => {
    return sequelize.define('raison', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true , 
            autoIncrement: true 
        },
        typeRaison: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}