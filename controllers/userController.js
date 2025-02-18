
// controllers/userController.js
exports.getUsers = (req, res) => res.json({ message: 'Get all users' });
exports.createUser = (req, res) => res.json({ message: 'Create user' });
exports.updateUser = (req, res) => res.json({ message: `Update user ${req.params.id}` });
exports.deleteUser = (req, res) => res.json({ message: `Delete user ${req.params.id}` });