const { Service } = require('../models/index')

//récupérer toutes les raisons 
exports.getAllService = async (req, res) => {
    Service.findAll()
    .then(services => {
        const message = `Tout les services ont bien été récupérer`
        res.json({message, data: services})
    })
}