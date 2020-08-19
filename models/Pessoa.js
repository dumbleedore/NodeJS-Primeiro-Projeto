const db = require("./db")


const usuario = db.sequelize.define('usuario',{
    nome : {type:db.Sequelize.STRING},
    senha : {type:db.Sequelize.STRING}
})



module.exports = usuario