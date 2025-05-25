const { Visite, Service, Raison } = require('../models/index')

//créer une visite 
exports.createVisite = async (req, res) => {
    Visite.create(req.body)
    .then(visite => {
        const message = `La visites  ${visite.id} a bien été créer.`
        res.json({ message, data: visite})
    } )
}


//récupérer un visite par son id 
exports.getViiteById = async (req, res) => {
    const visiteId = parseInt(req.params.id)
    
    Visite.findByPk( visiteId, { include: [Service, Raison] })
    .then(visite => {
        const message = 'La visite à bien été récupérer.'
        res.json({ message, data: visite})
    } )
}

//récupérer toute les visites
exports.getAllVisite = async (req, res) => {
    Visite.findAll({ include: [Service, Raison] })
    .then(visites => {
        const message = 'La liste des visites a bien été récupéré.'
        res.json({ message, data: visites})
    } )
}