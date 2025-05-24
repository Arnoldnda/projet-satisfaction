const {Visite, Raison, Service } = require('../models/index') 

module.exports = (app) => {
    app.get('/api/visites/:id', (req, res) => {
        const visiteId = parseInt(req.params.id)

        Visite.findByPk( visiteId, { include: [Service, Raison] })
        .then(visite => {
            const message = 'La visite à bien été récupérer.'
            res.json({ message, data: visite})
        } )
    } )
}