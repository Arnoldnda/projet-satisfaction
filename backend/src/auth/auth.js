const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers.authorization

    if (!authorizationHeader){
        const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez l'en-tête de la requête.`
        return res.status(401).json({message})
    }

    const token = authorizationHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, privateKey)
        const adminId = decodedToken.adminId 

        if (req.body && req.body.adminId && req.body.adminId !== adminId){
            const message = `L'identifiant de l'utilisateur est invalide `
            return res.status(401).json({message})
        }else {
            next()
        }
    } catch (error){
        console.log(error)
        const message = `L'utilisateur n'est pas autorisé à accéder à cette ressource.`
        return res.status(401).json({message, data: error})
    }
}

