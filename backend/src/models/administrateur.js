module.exports = (sequelize, DataTypes) => {
    return sequelize.define('administrateur', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Cet email est déjà utilisé.'
            },
            validate: {
                notNull: { msg: 'L’email est requis.' },
                notEmpty: { msg: 'L’email ne peut pas être vide.' },
                isEmail: { msg: 'Entrez une adresse email valide.' }
            }
        },
        passwd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: 'Le mot de passe est requis.' },
                notEmpty: { msg: 'Le mot de passe ne peut pas être vide.' },
                len: {
                    args: [8, 100],
                    msg: 'Le mot de passe doit contenir au moins 8 caractères.'
                }
            }
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}