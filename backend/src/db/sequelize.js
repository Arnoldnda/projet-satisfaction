const {sequelize, Visite, Raison, Service, Administrateur} = require('../models/index')
const raisons = require('./raison_data')
const services = require('./service_data')
const visites = require('./visite_data')


// Synchroniser la base 
const initDb = () => {
    return sequelize.sync({ force: true }) .then(_ => {
        console.log('Base de données synchronisée')
    
        Administrateur.create({ email: 'ndadesirarnold@gmail.com', passwd: '12345678' }).then(admin => console.log(admin.toJSON()))
    
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
}

module.exports = {initDb} 