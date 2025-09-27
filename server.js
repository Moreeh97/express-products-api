const express = require("express");
const productsRoutes = require("./routes/productsRoutes");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.error(" MongoDB connection error:", err));

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
