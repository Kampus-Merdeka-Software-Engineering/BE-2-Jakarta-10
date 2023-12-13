

// src/utils/db.js
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOST || "roundhouse.proxy.rlwy.net",
  port: process.env.DB_PORT || "20498",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "b-2-Acgcg5Gd31fgfgFAh3B3EGdhG21C",
  database: process.env.DB_NAME || "railway",
});

module.exports = sequelize;
// src/utils/db.js
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
