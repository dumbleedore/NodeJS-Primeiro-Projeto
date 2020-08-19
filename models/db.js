// Para utilizar banco de dados
const Sequelize = require('sequelize')


// CONEXÃO com o banco de dados
const sequelize = new Sequelize('sistemadecadastro','root','lu09051998',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}