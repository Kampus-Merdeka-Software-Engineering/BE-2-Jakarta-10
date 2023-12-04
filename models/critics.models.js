const { DataTypes } = require('sequelize')
const { sequelizeConnection } = require('../configurations/config')

const Critics = sequelizeConnection.define("critics", {
    name: {
        type: DataTypes.STRING
    }
    email: { 
        type: DataTypes.STRING
    }
    phone: {
        type: DataTypes.STRING
    }
    Comments: {
        type: DataTypes.TEXT
    }
})

module.exports = {
    Critics
}