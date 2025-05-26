module.exports = (sequelize, DataTypes) => {
    return sequelize.define('service', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true , 
            autoIncrement: true 
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Le nom ne peut pas être vide.' },
                len: {
                    args: [2, 100],
                    msg: 'Le nom doit contenir entre 2 et 100 caractères.'
                }
            }
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}