const {Visite, Raison, Service } = require('../models/index') 

module.exports = (app) => {
    app.get('/api/visites', (req, res) => {
        Visite.findAll({ include: [Service, Raison] })
        .then(visites => {
            const message = 'La liste des visites a bien été récupéré.'
            res.json({ message, data: visites})
        } )
    } )
}