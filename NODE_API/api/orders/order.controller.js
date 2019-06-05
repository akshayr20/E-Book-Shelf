const orderService = require('./order.service');

module.exports.getAllOrders = async (req, res) => {
	try {
		const response = await orderService.getAllOrders();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.getOrderById = async (req, res) => {
	try {
		const response = await orderService.getOrderById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.createOrder = async (req, res) => {
	try {
		const { productId, purchaseQuantity, userId } = req.body;
		const response = await orderService.createOrder(productId, purchaseQuantity, userId);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports.deleteOrderById = async (req, res) => {
	try {
		const response = await orderService.deleteOrderById(req.params.id);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};