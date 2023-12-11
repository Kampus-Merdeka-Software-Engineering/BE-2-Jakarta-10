// src/config/database.js
const { Sequelize } = require("sequelize");

// Sesuaikan dengan informasi database Anda
const sequelize = new Sequelize(
  "railway",
  "root",
  "b-2-Acgcg5Gd31fgfgFAh3B3EGdhG21C",
  {
    host: "roundhouse.proxy.rlwy.net",
    port: 20498,
    dialect: "mysql", // Sesuaikan dengan jenis database yang Anda gunakan
  }
);

// Uji koneksi ke database
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Panggil fungsi uji koneksi
testConnection();

module.exports = sequelize;
