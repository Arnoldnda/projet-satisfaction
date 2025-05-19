const express = require('express') 
const morgan = require('morgan')

const app = express()
const port = 3000 

app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Hello world.'))

app.listen(port, () => console.log(`Notre application node est demanrré sur http://localhost:${port}`))