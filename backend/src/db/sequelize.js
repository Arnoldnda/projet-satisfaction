const {Sequelize, DataTypes} = require('sequelize')

const raisons = require('./raison_data')
const services = require('./service_data')
const visites = require('./visite_data')

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
const Visite = visiteModel(sequelize, DataTypes)
const Raison = raisonModel(sequelize, DataTypes)
const Service = serviceModel(sequelize, DataTypes)
const Administrateur = administrateurModel(sequelize, DataTypes)

// Définir les associations

// 1 Service => plusieurs Visites
Service.hasMany(Visite, { foreignKey: 'serviceId' });
Visite.belongsTo(Service, { foreignKey: 'serviceId' });

// 1 Raison => plusieurs Visites
Raison.hasMany(Visite, { foreignKey: 'raisonId' });
Visite.belongsTo(Raison, { foreignKey: 'raisonId' });


// Synchroniser la base (à appeler dans un fichier de setup, pas ici en prod)
sequelize.sync({ force: true }) // utiliser `force: true` seulement en dev pour écraser les tables
.then(_ => {
    console.log('Base de données synchronisée')

    Administrateur.create({ email: 'ndadesirarnold@gmail.com', passwd: '1234' }).then(admin => console.log(admin.toJSON()))

    raisons.map(raison => {
        Raison.create({ typeRaison: raison.typeRaison }).then(raison => console.log(raison.toJSON()))
    })

    services.map(service => {
        Service.create({ nom: service.nom }).then(service => console.log(service.toJSON()))
    })

    visites.map(visite => {
        Visite.create({
            date: visite.date,
            email: visite.email,
            satisfaction: visite.satisfaction,
            commentaire: visite.commentaire,
            serviceId: visite.serviceId,
            raisonId: visite.raisonId
        }).then(visite => console.log(visite.toJSON()))
    })

})
.catch((err) => console.error('Erreur de sync :', err))


// Exporter les modèles
module.exports = {
    Visite, Service, Raison, Administrateur
}; 