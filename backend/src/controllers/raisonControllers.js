const { Raison } = require('../models/index')

//récupérer toutes les raisons 
exports.getAllRaison = async (req, res) => {
    Raison.findAll()
    .then(raisons => {
        const message = `Toutes les raions ont bien été récupérer`
        res.json({message, data: raisons})
    })
    .catch(error => {
        const message = `La liste des raisons n'a pas pu être récupérer. Réessayez dans quelque instant.`
        return res.status(500).json({message, data: error})
    } )
}