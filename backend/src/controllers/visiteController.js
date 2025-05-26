const { Visite, Service, Raison } = require('../models/index')
const { ValidationError } = require('sequelize')

//créer une visite 
exports.createVisite = async (req, res) => {
    Visite.create(req.body)
    .then(visite => {
        const message = `La visites  ${visite.id} a bien été créer.`
        res.json({ message, data: visite})
    } )
    .catch(error => {
        if (error instanceof ValidationError){
            return res.status(400).json({message: error.message, data: error})
        }
        const message = `La visite n'a pas pu être ajouter. Réessayez dans quelque instant.`
        return res.status(500).json({message, data: error})
    } )
}


//récupérer un visite par son id 
exports.getViiteById = async (req, res) => {
    const visiteId = parseInt(req.params.id)
    
    Visite.findByPk( visiteId, { include: [Service, Raison] })
    .then(visite => {
        if (visite === null ){
            const message = `La visite demander n'existe pas. réessayez avec un autre identifiant`
            return res.status(404).json({message})
        }
        const message = 'La visite à bien été récupérer.'
        res.json({ message, data: visite})
    } )
    .catch(error => {
        const message = `La visite n'a pas pu être récupérer. Réessayez dans quelque instant.`
        return res.status(500).json({message, data: error})
    } )
}

//récupérer toute les visites
exports.getAllVisite = async (req, res) => {
    Visite.findAll({ include: [Service, Raison] })
    .then(visites => {
        const message = 'La liste des visites a bien été récupéré.'
        res.json({ message, data: visites})
    } )
    .catch(error => {
        const message = `La liste des visites n'a pas pu être récupérer. Réessayez dans quelque instant.`
        return res.status(500).json({message, data: error})
    } )
}