const { sequelize } = require('sequelize');

const sequelizeConnection = new sequelize('revou_database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

const establishConnection = async function (){
    try {
        await sequelizeConnection.authenticate()
        console.error("Unable to connect", error)
    } catch (error) {
        console.error("Unable to connect", error)
}
}