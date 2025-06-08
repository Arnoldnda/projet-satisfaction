const {Administrateur} = require('../models/index')
const bcrypt = require('bcrypt')

exports.loginAdmin = async (req, res) => {

    const { email, passwd } = req.body 
    
    const Admin = await Administrateur.findOne({ where: { email } })

    if (!Admin) {
        return res.status(404).json({ message: "Administrateur non trouvé." });
    }

    const isPasswordValid = await bcrypt.compare(passwd, Admin.passwd)

    if (isPasswordValid) {

        const message = `L'utilisateur à été connecté avec succès`
        return res.status(200).json({message, data: Admin})

    } else {
        
        return res.status(401).json({ message: "Mot de passe incorrect." });
    }
}