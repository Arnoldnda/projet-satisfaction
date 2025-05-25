const express = require('express') 
const morgan = require('morgan')

//Importer le fichier de connection a la base de donnée
const sequelize = require('./src/db/sequelize')


const app = express()
const port = 3000 

app
.use(morgan('dev'))
.use(express.json())

//Initialiser la base de donnée
sequelize.initDb()

//Importer les routes 
const visiteRoutes = require('./src/routes/visiteRoutes')
const raisonRoutes = require('./src/routes/raisonRoutes')

app
.use(raisonRoutes)
.use(visiteRoutes)


app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))