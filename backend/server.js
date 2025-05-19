const express = require('express') 
const morgan = require('morgan')
const {Sequelize} = require('sequelize')

const app = express()
const port = 3000 

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

app
.use(morgan('dev'))
.use(express.json())

app.get('/', (req, res) => res.send('Hello world.'))

app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))