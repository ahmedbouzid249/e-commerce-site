const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./Config/database');
const authRoutes = require('./Routes/auth');
const productRoutes = require('./Routes/product');
const commentRoutes = require('./Routes/comment');
const ratingRoutes = require('./Routes/rating');
const favoriteRoutes = require('./Routes/favorite');
const adminProductsRouter = require('./Routes/adminProducts'); // Importez le routeur admin
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données
connectDB();

// Utilisez les routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/admin/products', adminProductsRouter); 

app.get('/', (req, res) => {
    res.send('Bienvenue sur le backend de HnaKids !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});