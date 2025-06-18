const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 }, // Optionnel : une note associée au commentaire
    createdAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;