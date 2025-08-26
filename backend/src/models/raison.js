module.exports = (sequelize, DataTypes) => {
    return sequelize.define('raison', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true , 
            autoIncrement: true 
        },
        typeRaison: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Le type de raison ne peut pas être vide.' },
                len: {
                    args: [2, 100],
                    msg: 'Le type de raison doit contenir entre 2 et 100 caractères.'
                }
            }
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}