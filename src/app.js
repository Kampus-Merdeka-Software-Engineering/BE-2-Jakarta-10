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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
