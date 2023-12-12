// src/config/database.js
const { Sequelize } = require("sequelize");

// Sesuaikan dengan informasi database Anda
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: console.log,
});

// Menguji koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;
