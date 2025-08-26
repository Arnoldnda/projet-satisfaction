const {DataTypes} = require('sequelize')
const sequelize = require("../config/database")

//Inproter les models 
const visiteModel = require('../models/visite')
const raisonModel = require('../models/raison')
const serviceModel = require('../models/service')
const administrateurModel = require('../models/administrateur')


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

module.exports = { sequelize, Visite, Raison, Service, Administrateur }