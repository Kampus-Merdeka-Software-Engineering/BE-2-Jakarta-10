const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes"); // Sesuaikan dengan path yang benar
const paymentRoutes = require("./routes/paymentRoutes");
const app = express();
const PORT = 22564;

// Middleware CORS
app.use(cors());

app.use(bodyParser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/process", paymentRoutes); // Gunakan route untuk pembayaran
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Atur domain atau '*' untuk memungkinkan dari semua domain
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
