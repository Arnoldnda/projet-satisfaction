const {Administrateur} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

exports.loginAdmin = async (req, res) => {

    try {

        const { email, passwd } = req.body 
        
        const admin = await Administrateur.findOne({ where: { email } })

        if (!admin) {
            return res.status(404).json({ message: "Administrateur non trouvé." });
        }

        const isPasswordValid = await bcrypt.compare(passwd, admin.passwd)

        if (isPasswordValid) {

            //JWT 
            const token = jwt.sign(
                {adminId: admin.id},
                privateKey,
                {expiresIn: '24h'}
            )

            const message = `L'utilisateur à été connecté avec succès`
            return res.status(200).json({message, data: admin, token})

        } else {
            
            return res.status(401).json({ message: "Mot de passe incorrect." });
        }

    }catch(error){
        const message = `L'utilisateur n'a pas pu être connecté. Réessayez dans quelque instants.`
        return res.status(500).json({message , data: error})
    }
}