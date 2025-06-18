const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    raterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Celui qui donne la note
    ratedId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Celui qui reçoit la note (acheteur ou vendeur)
    rating: { type: Number, min: 1, max: 5, required: true },
    type: { type: String, enum: ['vendeur', 'acheteur'], required: true }, // Type de notation
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }, // Optionnel : lié à une commande spécifique
    createdAt: { type: Date, default: Date.now }
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;