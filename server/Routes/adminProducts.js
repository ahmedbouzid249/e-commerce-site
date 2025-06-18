const express = require('express');
const router = express.Router();
const Product = require('../Models/Product');
//const isAdminAuth = require('../Middleware/isAdminAuth'); // Middleware pour vérifier si l'utilisateur est admin
const multer = require('multer');
const path = require('path');

// Configuration de Multer pour l'upload de l'image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Dossier où les images seront stockées (à créer)
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Route pour ajouter un nouveau produit par l'administrateur (nécessite d'être authentifié en tant qu'admin)
router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, category, age, color, brand, condition } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : ''; // Chemin de l'image enregistrée

        const newProduct = new Product({
            name, 
            description,
            price: parseFloat(price), // Assurez-vous que le prix est un nombre
            image: imageUrl, // Enregistrez le chemin de l'image
            category,
            age,
            color,
            brand,
            condition
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({ message: 'Produit ajouté par l\'administrateur avec succès!', product: savedProduct });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit par l\'administrateur:', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'ajout du produit par l\'administrateur.' });
    }
});

module.exports = router;