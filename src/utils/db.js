// src/utils/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "roundhouse.proxy.rlwy.net",
  port: process.env.DB_PORT || "22564",

  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "HGCbe-hFBb6BC-ddb32GDbedeEDhACba",
  database: process.env.DB_NAME || "railway",
});

// Function to connect to the database
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    // Handle the error or throw it to be caught elsewhere in your application
    throw err;
  }
}

// Call the function to connect to the database
connectToDatabase();

// Export the sequelize instance
module.exports = sequelize;
