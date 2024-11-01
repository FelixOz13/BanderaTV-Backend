const express = require('express');
const cartController = require('../controllers/cartController'); // Adjust the path if necessary
const { protect } = require('../middleware/authMiddleware'); // Updated import

const router = express.Router();

// Route to get cart by user ID
router.get('/:userId', protect, cartController.getCartByUserId);

// Route to add item to cart
router.post('/', protect, cartController.addItemToCart);

// Route to update item in cart
router.put('/:userId/:productId', protect, cartController.updateCartItem);

// Route to remove item from cart
router.delete('/:userId/:productId', protect, cartController.removeItemFromCart);

// Route to clear cart for a user
router.delete('/:userId', protect, cartController.clearCart);

module.exports = router;
