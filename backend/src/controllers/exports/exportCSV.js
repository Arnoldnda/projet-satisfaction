const { Parser } = require("json2csv") ; 
const {Visite, Raison, Service} = require("../../models/index") ; 


exports.exportVisitesCSV = async (req, res) => {
    try {
        const visites = await Visite.findAll({
            include: [Service, Raison]
        });
  
        const visitesData = visites.map(visite => ({
            Id: visite.id,
            Date: new Date(visite.date).toLocaleString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            Email: visite.email,
            Service: visite.service.nom,
            Raison: visite.raison.typeRaison,
            Satisfaction: visite.satisfaction,
            Commentaire: visite.commentaire
        }));
  
        const parser = new Parser();
        const csv = parser.parse(visitesData);
    
        res.header('Content-Type', 'text/csv');
        res.attachment('visites.csv');
        res.send(csv);
    } catch (error) {

        console.error('Erreur lors de l\'exportation CSV :', error); 

        res.status(500).json({ message: 'Erreur lors de l\'exportation CSV', error });
    }
};
