const { Visite, Service, Raison } = require('../../models/index');

// les satisfactions glabales 
exports.getSatisfactionStats = async (req, res) => {
  try {
    const total = await Visite.count();
    const categories = ['Très satisfait', 'Satisfait', 'Neutre', 'Insatisfait', 'Très insatisfait'];
    const stats = {};

    for (const categorie of categories) {
      const count = await Visite.count({ where: { satisfaction: categorie } });
      stats[categorie] = ((count / total) * 100).toFixed(2); // Pourcentage avec 2 décimales
    }

    res.status(200).json({ total, stats });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors du calcul des statistiques.', error });
  }
};

// les satisfactions par service 
exports.getSatisfactionByService = async (req, res) => {
  try {
    //recuperation de tout les services
    const services = await Service.findAll();
    const categories = ['Très satisfait', 'Satisfait', 'Neutre', 'Insatisfait', 'Très insatisfait'];
    const results = {};

    //pour chaque service on effectue des operation de pourcentage en fonction des services 
    for (const service of services) {

      const serviceName = service.nom; 
      const serviceId = service.id;

      //nombre de visite total par rapport a un service specifique 
      const total = await Visite.count({ where: { serviceId: serviceId } });

      // on recupère un pourcentage de 0 si le service ne compte aucune visite 
      if (total === 0) {
        results[serviceName] = {};
        categories.forEach(c => results[serviceName][c] = "0.00");
        continue;
      }

      const satisfactionStats = {};

      //on recupère le nombre de visite avec une categorie de satisfaction specifique dans un service 
      for (const categorie of categories) {
        const count = await Visite.count({
          where: {
            serviceId: serviceId,
            satisfaction: categorie
          }
        });
        satisfactionStats[categorie] = ((count / total) * 100).toFixed(2);
      }

      results[serviceName] = satisfactionStats;
    }

    res.status(200).json(results);

  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques par service.",
      error
    });
  }
};

//les visites par raison de visite 
exports.getStatsByRaison = async (req, res) => {
  try {
    const raisons = await Raison.findAll(); // Toutes les raisons
    const results = {};

    for (const raison of raisons) {
      const nomRaison = raison.typeRaison;
      const idRaison = raison.id;

      const count = await Visite.count({
        where: {
          raisonId: idRaison
        }
      });

      results[nomRaison] = count;
    }

    res.status(200).json(results);

  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques par motif de visite.",
      error
    });
  }
  
};

// les visites par services 
exports.getVisitesByService = async (req, res) => {
  try {
    const services = await Service.findAll();
    const results = {};

    for (const service of services) {
      const serviceName = service.nom;
      const serviceId = service.id;

      const count = await Visite.count({
        where: { serviceId }
      });

      results[serviceName] = count;
    }

    res.status(200).json(results);

  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des statistiques des visites par service.",
      error
    });
  }
};

