const { sequelize, Visite, Raison, Service, Administrateur } = require('../models/index');
const raisons = require('./raison_data');
const services = require('./service_data');
const visites = require('./visite_data');

const initDb = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Base de données synchronisée');

        // Création admin
        const admin = await Administrateur.create({ email: 'ndadesirarnold@gmail.com', passwd: '12345678' });
        console.log(admin.toJSON());

        // Création des raisons dans l'ordre
        for (const raison of raisons) {
            const created = await Raison.create({ typeRaison: raison.typeRaison });
            console.log(created.toJSON());
        }

        // Création des services dans l'ordre
        for (const service of services) {
            const created = await Service.create({ nom: service.nom });
            console.log(created.toJSON());
        }

        // Création des visites (si les raisons et services existent déjà)
        for (const visite of visites) {
            const created = await Visite.create({
                date: visite.date,
                email: visite.email,
                satisfaction: visite.satisfaction,
                commentaire: visite.commentaire,
                serviceId: visite.serviceId,
                raisonId: visite.raisonId
            });
            console.log(created.toJSON());
        }

    } catch (err) {
        console.error('Erreur de sync :', err);
    }
};

module.exports = { initDb };
