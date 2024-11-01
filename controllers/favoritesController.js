const Favorite = require('../models/favoritesModel');
const Card = require('../models/cardModel'); // Updated variable name to avoid conflicts

// Controller methods

// GET - Fetch all favorite cards for a user
const getFavoriteItemsById = async (req, res) => {
    try {
        const favorites = await Favorite.find({ user: req.params.userId }).populate('cards.card');
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST - Add a product to favorites
const addToFavorites = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const card = await Card.findById(productId); // Using 'Card' instead of 'card'
        if (!card) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let favorite = await Favorite.findOne({ user: userId });
        if (!favorite) {
            favorite = new Favorite({
                user: userId,
                cards: [{ card: productId }], // Updated to 'productId'
            });
        } else {
            const isCardAlreadyAdded = favorite.cards.some(item => item.card.toString() === productId); // Updated to 'productId'
            if (!isCardAlreadyAdded) {
                favorite.cards.push({ card: productId }); // Updated to 'productId'
            } else {
                return res.status(400).json({ message: 'Card already added to favorites' });
            }
        }

        await favorite.save();
        res.status(201).json(favorite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Remove a card from favorites
const removeFromFavorites = async (req, res) => {
    const { userId, cardId } = req.params;

    try {
        let favorite = await Favorite.findOne({ user: userId });
        if (!favorite) {
            return res.status(404).json({ message: 'Favorite list not found for the user' });
        }

        favorite.cards = favorite.cards.filter(item => item.card.toString() !== cardId);
        await favorite.save();

        res.json({ message: 'Card removed from favorites' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getFavoriteItemsById,
    addToFavorites,
    removeFromFavorites
};
