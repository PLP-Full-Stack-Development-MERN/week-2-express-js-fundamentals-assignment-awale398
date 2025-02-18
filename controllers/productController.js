
// controllers/productController.js
exports.getProducts = (req, res) => res.json({ message: 'Get all products' });
exports.createProduct = (req, res) => res.json({ message: 'Create product' });
exports.updateProduct = (req, res) => res.json({ message: `Update product ${req.params.id}` });
exports.deleteProduct = (req, res) => res.json({ message: `Delete product ${req.params.id}` });