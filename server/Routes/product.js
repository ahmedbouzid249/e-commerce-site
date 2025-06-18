const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');
const isAuth = require('../Middleware/isAuth'); // Pour protéger la route

// Route pour créer une nouvelle annonce de produit (nécessite d'être authentifié)
router.post('/add', isAuth, async (req, res) => {
    try {
        const { title, description, category, condition, size, ageRange, price, images } = req.body;

        const newProduct = new Product({
            sellerId: req.user._id, // L'ID de l'utilisateur authentifié est disponible via req.user grâce à isAuth
            title,
            description,
            category,
            condition,
            size,
            ageRange,
            price,
            images: images || [] // Si aucune image n'est fournie, initialiser un tableau vide
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Produit ajouté avec succès!', product: savedProduct });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'ajout du produit.' });
    }
});

// Route pour récupérer la liste de tous les produits disponibles
router.get('/list', async (req, res) => {
    try {
        const products = await Product.find({ isSold: false }).populate('sellerId', 'username'); // Récupérer uniquement les produits non vendus et peupler les informations du vendeur (nom d'utilisateur)
        res.status(200).json({ products });
    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des produits:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération de la liste des produits.' });
    }
});

// Route pour récupérer un produit spécifique par son ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId).populate('sellerId', 'username');

        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé.' });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération du produit.' });
    }
});

// Route pour mettre à jour un produit existant (nécessite d'être authentifié et d'être le vendeur)
router.put('/:id', isAuth, async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé.' });
        }

        // Vérifier si l'utilisateur connecté est le vendeur du produit
        if (product.sellerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à modifier ce produit.' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });

        res.status(200).json({ message: 'Produit mis à jour avec succès!', product: updatedProduct });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du produit:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la mise à jour du produit.' });
    }
});

// Route pour supprimer un produit (nécessite d'être authentifié et d'être le vendeur)
router.delete('/:id', isAuth, async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé.' });
        }

        // Vérifier si l'utilisateur connecté est le vendeur du produit
        if (product.sellerId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à supprimer ce produit.' });
        }

        await Product.findByIdAndDelete(productId);

        res.status(200).json({ message: 'Produit supprimé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de la suppression du produit:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la suppression du produit.' });
    }
});



module.exports = router;