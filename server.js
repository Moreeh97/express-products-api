const express = require("express");
const productsRoutes = require("./routes/productsRoutes");

const app = express();

app.use(express.json());

app.use("/api/products", productsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
