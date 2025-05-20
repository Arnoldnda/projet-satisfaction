module.exports = (sequelize, DataTypes) => {
    return sequelize.define('service', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true , 
            autoIncrement: true 
        },
        nom: {
            type: DataTypes.STRNG,
            allowNull: false
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}