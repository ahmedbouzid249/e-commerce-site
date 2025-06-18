const express = require('express');
const router = express.Router();
const Rating = require('../Models/Rating');
const isAuth = require('../Middleware/isAuth'); // Pour protéger les routes nécessitant une authentification

// Route pour noter un utilisateur (acheteur ou vendeur) après une transaction
router.post('/:userId', isAuth, async (req, res) => {
    try {
        const ratedId = req.params.userId;
        const { rating, type, orderId } = req.body;
        const raterId = req.user._id;

        // Empêcher l'auto-notation
        if (raterId.toString() === ratedId.toString()) {
            return res.status(400).json({ message: 'Vous ne pouvez pas vous noter vous-même.' });
        }

        const newRating = new Rating({
            raterId,
            ratedId,
            rating,
            type,
            orderId
        });

        const savedRating = await newRating.save();

        res.status(201).json({ message: 'Note ajoutée avec succès!', rating: savedRating });
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la note:', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'ajout de la note.' });
    }
});

// Route pour récupérer les notes d'un vendeur
router.get('/vendeur/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const ratings = await Rating.find({ ratedId: userId, type: 'vendeur' });
        const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / (ratings.length || 1);
        res.status(200).json({ ratings, averageRating });
    } catch (error) {
        console.error('Erreur lors de la récupération des notes du vendeur:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des notes du vendeur.' });
    }
});

// Route pour récupérer les notes d'un acheteur
router.get('/acheteur/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const ratings = await Rating.find({ ratedId: userId, type: 'acheteur' });
        const averageRating = ratings.reduce((sum, r) => sum + r.rating, 0) / (ratings.length || 1);
        res.status(200).json({ ratings, averageRating });
    } catch (error) {
        console.error('Erreur lors de la récupération des notes de l\'acheteur:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des notes de l\'acheteur.' });
    }
});

module.exports = router;