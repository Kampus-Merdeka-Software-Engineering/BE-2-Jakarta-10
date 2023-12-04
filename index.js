const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// import library CORS
const cors = require("cors");

// use cors
app.use(cors());

// Konfigurasi koneksi ke database MySQL
const db = mysql.createConnection({
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

app.use(bodyParser.json());
// Endpoint for user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Query to check if the user with the given email and password exists
  const loginUserQuery = "SELECT * FROM users WHERE email = ? AND password = ?";

  // Check if the user exists
  db.query(loginUserQuery, [email, password], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Terjadi kesalahan." });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: "Login berhasil." });
    } else {
      return res.status(401).json({ message: "Email atau password salah." });
    }
  });
});
// Endpoint untuk pendaftaran (register)
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Query untuk memeriksa apakah email sudah terdaftar
  const checkUserQuery = "SELECT * FROM users WHERE email = ?";

  // Query untuk menambahkan pengguna baru
  const addUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";

  // Memeriksa apakah email sudah terdaftar
  db.query(checkUserQuery, [email], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Terjadi kesalahan." });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar." });
    }

    // Menambahkan pengguna baru jika email belum terdaftar
    db.query(addUserQuery, [email, password], (error) => {
      if (error) {
        return res.status(500).json({ message: "Terjadi kesalahan." });
      }

      res.status(201).json({ message: "Pendaftaran berhasil." });
    });
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the registration server");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
