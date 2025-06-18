const express = require('express');
const router = express.Router();
const Favorite = require('../Models/Favorite');
const isAuth = require('../Middleware/isAuth'); // Pour protéger les routes nécessitant une authentification

// Route pour ajouter un produit aux favoris de l'utilisateur connecté
router.post('/add/:productId', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const productId = req.params.productId;

        // Vérifier si le produit existe déjà dans les favoris de l'utilisateur
        const existingFavorite = await Favorite.findOne({ userId: userId, productId: productId });
        if (existingFavorite) {
            return res.status(409).json({ message: 'Ce produit est déjà dans vos favoris.' });
        }

        const newFavorite = new Favorite({
            userId: userId,
            productId: productId
        });

        const savedFavorite = await newFavorite.save();

        res.status(201).json({ message: 'Produit ajouté aux favoris!', favorite: savedFavorite });
    } catch (error) {
        console.error('Erreur lors de l\'ajout aux favoris:', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'ajout aux favoris.' });
    }
});

// Route pour récupérer la liste des favoris de l'utilisateur connecté
router.get('/', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const favorites = await Favorite.find({ userId: userId }).populate('productId'); // Peupler les détails du produit
        res.status(200).json({ favorites });
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des favoris.' });
    }
});

// Route pour supprimer un produit des favoris de l'utilisateur connecté
router.delete('/remove/:productId', isAuth, async (req, res) => {
    try {
        const userId = req.user._id;
        const productId = req.params.productId;

        const deletedFavorite = await Favorite.findOneAndDelete({ userId: userId, productId: productId });

        if (!deletedFavorite) {
            return res.status(404).json({ message: 'Produit non trouvé dans vos favoris.' });
        }

        res.status(200).json({ message: 'Produit retiré des favoris!' });
    } catch (error) {
        console.error('Erreur lors de la suppression des favoris:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la suppression des favoris.' });
    }
});

module.exports = router;