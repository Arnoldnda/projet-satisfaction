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
            allowNull: false, 
            validate: {
                notNull: { msg: `La date est requise.` },
                isDate: { msg: `La date doit être valide.` }
            }
        },
        email: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: { 
                isEmail: { msg: `Utilisez un email valide.`},
                notNull: {msg : `L'email est une propriété requise.`},
                notEmpty: { msg: `L'email ne peut pas être vide.` }
            }
        },
        satisfaction: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: `Le niveau de satisfaction est requis.` },
                notEmpty: { msg: `Le niveau de satisfaction ne peut pas être vide.` },
                isIn: {
                    args: [['Très insatisfait', 'Insatisfait', 'Neutre', 'Satisfait', 'Très satisfait']],
                    msg: `La satisfaction doit être l'une des valeurs suivantes : Très insatisfait, Insatisfait, Neutre, Satisfait, Très satisfait.`
                }
            }
        },
        commentaire: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: {
                    args: [0, 1000],
                    msg: `Le commentaire ne doit pas dépasser 1000 caractères.`
                }
            }
        },
        serviceId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: 'Le service est requis.' },
                isInt: { msg: 'L’identifiant du service doit être un entier.' }
            }
        },
        raisonId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: 'La raison de la visite est requise.' },
                isInt: { msg: 'L’identifiant de la raison doit être un entier.' }
            }
        }
    },{
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })  
}