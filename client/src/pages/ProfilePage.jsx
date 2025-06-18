"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "Sarah",
        lastName: "Ben Ammar",
        email: "sarah@example.com",
        phone: "06 12 34 56 78",
        address: "123 Rue du Commerce",
        city: "Paris",
        postalCode: "75001",
        country: "France",
    });

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
          setIsAuthenticated(true)
          // Mock user data for development until backend is connected
          setFormData({
            firstName: "Utilisateur",
            lastName: "Test",
            username: "user_test",
            email: "user@example.com",
          })
    
          // Commented out actual API call until backend is ready
          // Fetch user data
          const fetchUserData = async () => {
            try {
              const response = await fetch("http://localhost:5000/api/auth/isAuth", {
                headers: {
                  Authorization: token,
                },
              })
              if (response.ok) {
                const data = await response.json()
                setFormData(data.user)
              }
            } catch (error) {
              console.error("Error fetching user data:", error)
            }
          }
          fetchUserData()
        }
      }, [])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your API
        console.log("Form submitted:", formData);
        // Show success message
        alert("Profil mis à jour avec succès!");
    };

    return (
        <div className="max-w-4xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8 text-center"
            >
                Mon Profil
            </motion.h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block mb-1 font-medium">
                                Prénom
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1 font-medium">
                                Nom
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-1 font-medium">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                            />
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h2 className="text-xl font-semibold mb-4">Adresse de livraison</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label htmlFor="address" className="block mb-1 font-medium">
                                    Adresse
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block mb-1 font-medium">
                                    Ville
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="postalCode" className="block mb-1 font-medium">
                                    Code postal
                                </label>
                                <input
                                    type="text"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>

                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h2 className="text-xl font-semibold mb-4">Sécurité</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="currentPassword"
                                    className="block mb-1 font-medium"
                                >
                                    Mot de passe actuel
                                </label>
                                <input
                                    type="password"
                                    id="currentPassword"
                                    name="currentPassword"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="newPassword" className="block mb-1 font-medium">
                                    Nouveau mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-1 font-medium"
                                >
                                    Confirmer le nouveau mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
                        >
                            Enregistrer les modifications
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
