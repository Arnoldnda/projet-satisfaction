const express = require('express') 
const morgan = require('morgan')
const cors = require('cors')

//Importer le fichier de connection a la base de donnée
const sequelize = require('./src/db/sequelize')


const app = express()
const port = 3000 

app
.use(cors())
.use(morgan('dev'))
.use(express.json())

//Initialiser la base de donnée
sequelize.initDb()

//Importer les routes 
const visiteRoutes = require('./src/routes/visiteRoutes')
const raisonRoutes = require('./src/routes/raisonRoutes')
const serviceRoutes = require('./src/routes/serviceRoutes') 

app
.use(serviceRoutes)
.use(raisonRoutes)
.use(visiteRoutes)

//on ajoute la gestion des erreurs 404
app.use(({res}) => {
    const message = `Impossible de trouver la ressource démandée ! Vous pouvez essayer une autre URL`
    res.status(404).json({message})
} )


app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))