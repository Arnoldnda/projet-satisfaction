const express = require('express') 
const morgan = require('morgan')
const {Sequelize} = require('sequelize')


//Importer le fichier de connection a a base de donnée
const sequelize = require('./src/db/sequelize')


const app = express()
const port = 3000 

app
.use(morgan('dev'))
.use(express.json())

app.get('/', (req, res) => res.send('Hello world.'))

app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))