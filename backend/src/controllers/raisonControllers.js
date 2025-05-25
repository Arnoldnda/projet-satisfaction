const { Raison } = require('../models/index')

//récupérer toutes les raisons 
exports.getAllRaison = async (req, res) => {
    Raison.findAll()
    .then(raisons => {
        const message = `Toutes les raions ont bien été récupérer`
        res.json({message, data: raisons})
    })
}