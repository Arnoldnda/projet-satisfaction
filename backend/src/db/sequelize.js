const {Sequelize, DataTypes} = require('sequelize')

//Inproter les models 
const visiteModel = require('../models/visite')
const raisonModel = require('../models/raison')
const serviceModel = require('../models/service')
const administrateurModel = require('../models/administrateur')

//connection a la base de donnée 
const sequelize = new Sequelize('project_satisfation', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

sequelize.authenticate()
.then(_ => console.log('La connexion à la base de donnée à bien été établie'))
.catch(error => console.log(`Impossible de se connecté a la base de donnée ${error}`)) 

//Initalisation des models
const visite = visiteModel(sequelize, DataTypes)
const raison = raisonModel(sequelize, DataTypes)
const service = serviceModel(sequelize, DataTypes)
const administrateur = administrateurModel(sequelize, DataTypes)

// Définir les associations

// 1 Service => plusieurs Visites
service.hasMany(visite, { foreignKey: 'serviceId' });
visite.belongsTo(service, { foreignKey: 'serviceId' });

// 1 Raison => plusieurs Visites
raison.hasMany(visite, { foreignKey: 'raisonId' });
visite.belongsTo(raison, { foreignKey: 'raisonId' });


// Synchroniser la base (à appeler dans un fichier de setup, pas ici en prod)
sequelize.sync({ force: true }) // ⚠️ utiliser `force: true` seulement en dev pour écraser les tables
  .then(() => console.log('Base de données synchronisée'))
  .catch((err) => console.error('Erreur de sync :', err));


// Exporter les modèles
module.exports = {
    visite, service, raison, administrateur
};