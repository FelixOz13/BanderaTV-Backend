const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController'); // Adjust the path if necessary

// Routes for Cards

// GET - Fetch all cards
router.get('/', cardController.getAllCards);

// GET - Fetch a card by ID
router.get('/:id', cardController.getCardById);

// POST - Create a new card
router.post('/', cardController.createCard);

// PUT - Update a card by ID
router.put('/:id', cardController.updateCard);

// DELETE - Delete a card by ID
router.delete('/:id', cardController.deleteCard);

module.exports = router;

