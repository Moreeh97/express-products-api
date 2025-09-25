const express = require("express");
 feature/crud-operations
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const { getAllProducts, getSingleProduct } = require("../controllers/productsController");
 master

const router = express.Router();

router.get("/", getAllProducts);
 feature/crud-operations
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


router.get("/:id", getSingleProduct);
 master

module.exports = router;
