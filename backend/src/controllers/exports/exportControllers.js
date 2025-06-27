const { Parser } = require("json2csv") ; 
const ExcelJS = require('exceljs');
const {Visite, Raison, Service} = require("../../models/index") ; 


// expots des données en csv
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

// export des données en excel
exports.exportVisitesExcel = async (req, res) => {
    try {
        const visites = await Visite.findAll({
            include: [Service, Raison],
        });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Visites');

        // En-têtes
        worksheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Date', key: 'date', width: 20 },
            { header: 'Email', key: 'email', width: 25 },
            { header: 'Service', key: 'service', width: 20 },
            { header: 'Raison', key: 'raison', width: 25 },
            { header: 'Satisfaction', key: 'satisfaction', width: 20 },
            { header: 'Commentaire', key: 'commentaire', width: 50 }
        ];

        // Données
        visites.forEach(visite => {
            worksheet.addRow({
                id: visite.id,
                date: new Date(visite.date).toLocaleString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
                }),
                email: visite.email,
                service: visite.service.nom,
                raison: visite.raison.typeRaison,
                satisfaction: visite.satisfaction,
                commentaire: visite.commentaire
            });
        });

        // Définir les headers de la réponse
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=visites.xlsx'
        );

        // Écriture du fichier et envoi
        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error("Erreur export Excel :", error);
        res.status(500).json({ message: "Erreur lors de l'exportation Excel", error });
    }
};

