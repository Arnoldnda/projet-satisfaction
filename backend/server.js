const express = require('express') 
const morgan = require('morgan')

//Importer le fichier de connection a la base de donnée
const sequelize = require('./src/db/sequelize')


const app = express()
const port = 3000 

app
.use(morgan('dev'))
.use(express.json())

sequelize.initDb()

//les end point ici 
require('./src/routes/findAllVisites')(app)


app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))