const { Visite } = require('../../models/index');


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
