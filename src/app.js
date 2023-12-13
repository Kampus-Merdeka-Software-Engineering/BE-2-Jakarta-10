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
const corsOptions = {
  origin: "https://kampus-merdeka-software-engineering.github.io/FE-2-Jakarta-10/Page/Registrasi.html", // Ganti dengan URL front end Anda
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengizinkan pengiriman cookie melalui CORS
  optionsSuccessStatus: 204, // Memberikan status 204 untuk metode OPTIONS
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
