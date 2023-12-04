const { Critics } = require('../models/critics.models')

const migrateSchema = async function() {
    await Critics.sync()
}

module.exports = {
    migrateSchema
}