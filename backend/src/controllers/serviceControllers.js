const { Service } = require('../models/index')

//récupérer toutes les raisons 
exports.getAllService = async (req, res) => {
    Service.findAll()
    .then(services => {
        const message = `Tout les services ont bien été récupérer`
        res.json({message, data: services})
    })
    .catch(error => {
        const message = `La liste des services n'a pas pu être récupérer. Réessayez dans quelque instant.`
        return res.status(500).json({message, data: error})
    } )
}