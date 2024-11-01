const Card = require('../models/cardModel'); // Use require instead of import

// Controller methods

// GET - Fetch all cards
const getAllCards = async (req, res) => {
    try {
      const { title, category } = req.query;
  
      // Filter by title and category
      let query = {};
      if (title) query.title = { $regex: title, $options: 'i' };
      if (category) query.category = category;
  
      const cards = await Card.find(query).limit(100); // Adjust limit as needed
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
// GET - Fetch a card by ID
const getCardById = async (req, res) => {
    try {
        // Find the card by ID and increment the viewCount by 1
        const card = await Card.findByIdAndUpdate(
            req.params.id,
            { $inc: { viewCount: 1 } }, // Increment viewCount by 1
            { new: true } // Return the updated document
        );

        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.json(card);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// POST - Create a new card
const createCard = async (req, res) => {
    try {
        const card = new Card({
            title: req.body.title,
            description: req.body.description,
            videourl: req.body.videourl,
            price: req.body.price,
            coverImg: req.body.coverImg,
            category: req.body.category,
            location: req.body.location,
            locationImg: req.body.locationImg,
            openSpots: req.body.openSpots,
            likes: req.body.likes,
            websiteurl: req.body.websiteurl,
            youtube: req.body.youtube,
            facebook: req.body.facebook,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
            spotify: req.body.spotify,
            deezer: req.body.deezer,
            apple: req.body.apple,
            soundcloud: req.body.soundcloud,
            tidal: req.body.tidal,
            wiki: req.body.wiki,
            ticketmaster: req.body.ticketmaster,
            tiktok: req.body.tiktok
        });

        const newCard = await card.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT - Update a card by ID
const updateCard = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        // Update fields only if provided in request body
        card.title = req.body.title || card.title;
        card.description = req.body.description || card.description;
        card.videourl = req.body.videourl || card.videourl;
        card.price = req.body.price || card.price;
        card.coverImg = req.body.coverImg || card.coverImg;
        card.category = req.body.category || card.category;
        card.location = req.body.location || card.location;
        card.locationImg = req.body.locationImg || card.locationImg;
        card.openSpots = req.body.openSpots || card.openSpots;
        card.likes = req.body.likes || card.likes;
        card.websiteurl = req.body.websiteurl || card.websiteurl;
        card.youtube = req.body.youtube || card.youtube;
        card.facebook = req.body.facebook || card.facebook;
        card.instagram = req.body.instagram || card.instagram;
        card.twitter = req.body.twitter || card.twitter;
        card.spotify = req.body.spotify || card.spotify;
        card.deezer = req.body.deezer || card.deezer;
        card.apple = req.body.apple || card.apple;
        card.soundcloud = req.body.soundcloud || card.soundcloud;
        card.tidal = req.body.tidal || card.tidal;
        card.wiki = req.body.wiki || card.wiki;
        card.ticketmaster = req.body.ticketmaster || card.ticketmaster;
        card.tiktok = req.body.tiktok || card.tiktok;

        const updatedCard = await card.save();
        res.json(updatedCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE - Delete a card by ID
const deleteCard = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        await card.remove();
        res.json({ message: 'Card deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
};
