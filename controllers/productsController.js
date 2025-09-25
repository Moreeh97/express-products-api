let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
];

feature/crud-operations
const createProduct = (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ message: "Name and category are required" });
  }

  const newProduct = { id: products.length + 1, name, category };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, category } = req.body;
  if (name) product.name = name;
  if (category) product.category = category;

  res.json(product);
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
};

=======
 master
const getAllProducts = (req, res) => {
  const { category, name } = req.query;
  let result = products;

  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  if (name) {
    result = result.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json(result);
};

const getSingleProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

 feature/crud-operations
module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
=======
module.exports = { getAllProducts, getSingleProduct, products };
 master
