let mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nama_database_mysql",
});

// Hubungkan ke database
db.connect((err) => {
  if (err) {
    console.error("Koneksi database gagal:", err);
  } else {
    console.log("Berhasil terhubung ke database MySQL");
  }
});

module.exports = db;
