const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    category: { type: String, enum: ['vetement_enfant', 'jeu', 'livre_enfant', 'vetement_allaitement'], required: true },
    condition: { type: String, enum: ['neuf', 'tres_bon_etat', 'bon_etat', 'satisfaisant'], required: true },
    size: { type: String, trim: true },
    ageRange: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    images: {
        type: [{ type: String }],
        required: [true, 'Au moins une image est requise.'],
        validate: {
            validator: (array) => array.length > 0,
            message: 'Au moins une image est requise.'
        }
    },
    gender: { type: String, enum: ['fille', 'garcon', 'unisexe'], trim: true },
    isSold: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;