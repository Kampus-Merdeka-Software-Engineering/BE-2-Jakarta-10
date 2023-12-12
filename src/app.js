const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Sesuaikan dengan path yang benar
const paymentRoutes = require("./routes/paymentRoutes");
const app = express();
const PORT = 20498;

// Middleware CORS
app.use(cors());

app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/process", paymentRoutes); // Gunakan route untuk pembayaran

// Database Configuration
const dbConfig = {
  host: process.env.DB_HOST || "roundhouse.proxy.rlwy.net",
  port: process.env.DB_PORT || 20498,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "b-2-Acgcg5Gd31fgfgFAh3B3EGdhG21C",
  database: process.env.DB_NAME || "railway",
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Database configuration:", dbConfig);
});
