const {Sequelize} = require('sequelize')


//connection a la base de donnée 
const sequelize = new Sequelize('project_satisfation', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: false
})

sequelize.authenticate()
.then(_ => console.log('La connexion à la base de donnée à bien été établie'))
.catch(error => console.log(`Impossible de se connecté a la base de donnée ${error}`)) 

module.exports = sequelize 