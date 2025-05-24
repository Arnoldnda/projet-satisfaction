const {Visite, Raison, Service } = require('../models/index') 

module.exports = (app) => {
    app.post('/api/visite' , (req, res) => {
        Visite.create(req.body)
        .then(visite => {
            const message = `La visites  ${visite.id} a bien été créer.`
            res.json({ message, data: visite})
        } )
    } )
}