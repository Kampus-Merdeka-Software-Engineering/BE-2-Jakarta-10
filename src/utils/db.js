// src/utils/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "roundhouse.proxy.rlwy.net",
<<<<<<< HEAD
  port: process.env.DB_PORT || "22564",

  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "HGCbe-hFBb6BC-ddb32GDbedeEDhACba",
=======
  port: process.env.DB_PORT || "20498",

  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "b-2-Acgcg5Gd31fgfgFAh3B3EGdhG21C",
>>>>>>> 73f05c4bebbbeec9947a6897a9cf53e4acd9696e
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
<<<<<<< HEAD
module.exports = sequelize;
=======
module.exports = sequelize;
>>>>>>> 73f05c4bebbbeec9947a6897a9cf53e4acd9696e
