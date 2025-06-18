const express = require('express');
const router = express.Router();
const Comment = require('../Models/Comment');
const isAuth = require('../Middleware/isAuth'); // Pour protéger les routes nécessitant une authentification

// Route pour ajouter un commentaire à un produit (nécessite d'être authentifié)
router.post('/:productId', isAuth, async (req, res) => {
    try {
        const productId = req.params.productId;
        const { content, rating } = req.body;

        const newComment = new Comment({
            productId: productId,
            userId: req.user._id, // L'ID de l'utilisateur connecté
            content,
            rating
        });

        const savedComment = await newComment.save();

        res.status(201).json({ message: 'Commentaire ajouté avec succès!', comment: savedComment });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du commentaire:', error);
        res.status(500).json({ message: 'Erreur serveur lors de l\'ajout du commentaire.' });
    }
});

// Route pour récupérer les commentaires d'un produit
router.get('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const comments = await Comment.find({ productId: productId }).populate('userId', 'username'); // Peupler le nom d'utilisateur de l'auteur du commentaire
        res.status(200).json({ comments });
    } catch (error) {
        console.error('Erreur lors de la récupération des commentaires:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la récupération des commentaires.' });
    }
});

// Route pour supprimer un commentaire (seul l'auteur peut le supprimer pour l'instant)
router.delete('/:commentId', isAuth, async (req, res) => {
    try {
        const commentId = req.params.commentId;
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Commentaire non trouvé.' });
        }

        // Vérifier si l'utilisateur connecté est l'auteur du commentaire
        if (comment.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Vous n\'êtes pas autorisé à supprimer ce commentaire.' });
        }

        await Comment.findByIdAndDelete(commentId);

        res.status(200).json({ message: 'Commentaire supprimé avec succès!' });
    } catch (error) {
        console.error('Erreur lors de la suppression du commentaire:', error);
        res.status(500).json({ message: 'Erreur serveur lors de la suppression du commentaire.' });
    }
});

module.exports = router;