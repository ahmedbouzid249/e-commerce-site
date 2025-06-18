const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../Middleware/isAuth");

// Route pour l'inscription d'un nouvel utilisateur
router.post("/register", async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        // Vérifier si l'email existe déjà
        const existingEmailUser = await User.findOne({ email });
        if (existingEmailUser) {
            return res.status(409).json({ msg: "Cet email est déjà utilisé." });
        }

        // Vérifier si le nom d'utilisateur existe déjà
        const existingUsernameUser = await User.findOne({ username });
        if (existingUsernameUser) {
            return res.status(409).json({ msg: "Ce nom d'utilisateur est déjà pris." });
        }

        // Créer un nouvel utilisateur
        const newUser = new User({
            username,
            email,
            password, // Le mot de passe sera haché plus tard
            phone,
        });

        // Hacher le mot de passe
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedPassword;

        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();

        // Créer le payload pour le token JWT
        const payload = {
            id: newUser._id,
        };

        // Générer le token JWT
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // Renvoyer une réponse réussie avec les informations de l'utilisateur et le token
        res.status(201).json({
            msg: "Utilisateur créé avec succès !",
            user: { _id: newUser._id, username: newUser.username, email: newUser.email },
            token,
        });

    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        res.status(500).json({ msg: "Erreur serveur lors de l'inscription." });
    }
});

// Route pour la connexion d'un utilisateur existant
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Trouver l'utilisateur par email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "Utilisateur non trouvé." });
        }

        // Vérifier si le mot de passe correspond
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Mot de passe incorrect." });
        }

        // Créer le payload pour le token JWT
        const payload = {
            id: user._id,
        };

        // Générer le token JWT
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // Renvoyer une réponse réussie avec les informations de l'utilisateur et le token
        res.status(200).json({
            msg: "Connecté avec succès !",
            user: { _id: user._id, username: user.username, email: user.email },
            token,
        });

    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ msg: "Erreur serveur lors de la connexion." });
    }
});

// Route pour vérifier l'authentification (peut-être pas nécessaire si vous utilisez /me)
router.get("/isAuth", isAuth, async (req, res) => {
    try {
        // Si isAuth passe, l'utilisateur est authentifié. Renvoyez ses infos.
        res.status(200).json({ user: { _id: req.user._id, username: req.user.username, email: req.user.email } });
    } catch (error) {
        console.error("Erreur lors de la vérification de l'authentification :", error);
        res.status(500).json({ msg: "Erreur serveur." });
    }
});

// Route pour récupérer les informations de l'utilisateur connecté (/me est plus courant)
router.get("/user", isAuth, async (req, res) => {
    try {
        // L'utilisateur est déjà authentifié grâce à isAuth, les infos sont dans req.user
        // Sélectionner les champs à renvoyer (exclure le mot de passe)
        const user = await User.findById(req.user._id).select("-password -__v"); // "__v" est la version de Mongoose
        if (!user) {
            return res.status(404).json({ msg: "Utilisateur non trouvé." }); // Plus précis
        }

        res.status(200).json(user);

    } catch (error) {
        console.error("Erreur lors de la récupération des infos utilisateur :", error);
        res.status(500).json({ msg: "Erreur serveur." });
    }
});


// Route pour mettre à jour les informations de l'utilisateur connecté
router.patch("/me", isAuth, async (req, res) => {
    try {
        const userId = req.user._id; // Récupérer l'ID de l'utilisateur authentifié
        const updates = req.body;     // Récupérer les champs à mettre à jour

        // Autoriser uniquement certaines mises à jour (sécurité)
        const allowedUpdates = ["firstName", "lastName", "email", "phone", "deliveryAddress"];
        const isValidOperation = Object.keys(updates).every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).json({ msg: "Mise à jour non autorisée." }); // Mauvaise requête
        }

        // Mettre à jour l'utilisateur dans la base de données
        const user = await User.findByIdAndUpdate(userId, updates, {
            new: true,       // Renvoyer l'utilisateur modifié plutôt que l'original
            runValidators: true // Valider les mises à jour en fonction du schéma du modèle
        }).select("-password -__v"); // Exclure le mot de passe et la version

        if (!user) {
            return res.status(404).json({ msg: "Utilisateur non trouvé." }); // Utilisateur introuvable (peu probable ici, mais au cas où)
        }

        res.status(200).json(user); // Renvoyer l'utilisateur mis à jour
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        res.status(500).json({ msg: "Erreur serveur lors de la mise à jour de l'utilisateur." });
    }
});


module.exports = router;