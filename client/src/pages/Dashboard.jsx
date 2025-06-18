"use client"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaShoppingBag, FaHeart, FaBox, FaSignOutAlt, FaEdit, FaPlus } from "react-icons/fa"
import { MdDashboard, MdSettings } from "react-icons/md"
import { motion } from "framer-motion"

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("overview")
    const [userData, setUserData] = useState({
        firstName: "Sarah",
        lastName: "Ben Ammar",
        username: "sarah.ba",
        email: "sarah@example.com",
        role: "user",
    })
    const [orders, setOrders] = useState([])
    const [favorites, setFavorites] = useState([])
    const [listedItems, setListedItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
          setIsAuthenticated(true)
          // Mock user data for development until backend is connected
          setUserData({
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
                setUserData(data.user)
              }
            } catch (error) {
              console.error("Error fetching user data:", error)
            }
          }
          setOrders([
            { id: 1, date: "2023-04-15", status: "Livré", total: 59.97, items: 3 },
            { id: 2, date: "2023-03-22", status: "En cours", total: 29.99, items: 1 },
            { id: 3, date: "2023-02-10", status: "Livré", total: 45.98, items: 2 },
        ])

        setFavorites([
            {
                id: 101,
                name: "T-shirt Coton Bio",
                price: 19.99,
                image: "/placeholder.svg?height=100&width=100&text=T-shirt",
            },
            {
                id: 102,
                name: "Pantalon Jean",
                price: 24.99,
                image: "/placeholder.svg?height=100&width=100&text=Pantalon",
            },
        ])

        setListedItems([
            {
                id: 201,
                name: "Chaussures Sport",
                price: 34.99,
                status: "En vente",
                image: "/placeholder.svg?height=100&width=100&text=Chaussures",
            },
            {
                id: 202,
                name: "Pull en Laine",
                price: 29.99,
                status: "Vendu",
                image: "/placeholder.svg?height=100&width=100&text=Pull",
            },
            {
                id: 203,
                name: "Jouet Éducatif",
                price: 15.99,
                status: "En vente",
                image: "/placeholder.svg?height=100&width=100&text=Jouet",
            },
        ])
          fetchUserData()
        }
      }, [])

    // useEffect(() => {
    //     const fetchDashboardData = async () => {
    //         setLoading(true)
    //         setError("")
    //         const token = localStorage.getItem("token")

    //         if (!token) {
    //             setError("Vous n'êtes pas connecté.")
    //             setLoading(false)
    //             navigate("/login")
    //             return
    //         }

    //         try {
    //             // In a real app, you would fetch user data from your API
    //             // For now, we'll use mock data

    //             // Mock user data
    //             setUserData()

    //             // Mock data for orders, favorites, and listed items
               
    //         } catch (error) {
    //             console.error("Erreur lors de la récupération des données du tableau de bord :", error)
    //             setError("Erreur lors du chargement des données du tableau de bord.")
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     fetchDashboardData()
    // }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    const isAdmin = userData?.role === "admin"

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center h-64">
    //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-peach"></div>
    //         </div>
    //     )
    // }

    if (error) {
        return (
            <div
                className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded relative"
                role="alert"
            >
                <strong className="font-bold">Erreur! </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Tableau de bord</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-20 h-20 rounded-full bg-brand-peach/20 dark:bg-brand-beige/20 flex items-center justify-center text-brand-peach dark:text-brand-beige text-2xl font-bold mb-4">
                                {userData?.firstName?.charAt(0) || userData?.username?.charAt(0) || "U"}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                {userData?.firstName ? `${userData.firstName} ${userData.lastName}` : userData?.username}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{userData?.email}</p>
                        </div>

                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab("overview")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "overview"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <MdDashboard className="mr-3 h-5 w-5" />
                                <span>Vue d'ensemble</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("profile")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "profile"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <FaUser className="mr-3 h-5 w-5" />
                                <span>Profil</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("orders")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "orders"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <FaShoppingBag className="mr-3 h-5 w-5" />
                                <span>Commandes</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("favorites")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "favorites"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <FaHeart className="mr-3 h-5 w-5" />
                                <span>Favoris</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("listings")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "listings"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <FaBox className="mr-3 h-5 w-5" />
                                <span>Mes articles</span>
                            </button>

                            <button
                                onClick={() => setActiveTab("settings")}
                                className={`w-full flex items-center p-3 rounded-md transition-colors ${activeTab === "settings"
                                        ? "bg-brand-peach/10 dark:bg-brand-beige/10 text-brand-peach dark:text-brand-beige"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                <MdSettings className="mr-3 h-5 w-5" />
                                <span>Paramètres</span>
                            </button>

                            {isAdmin && (
                                <Link
                                    to="/admin/ajouter-produit"
                                    className="w-full flex items-center p-3 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                                >
                                    <FaPlus className="mr-3 h-5 w-5" />
                                    <span>Ajouter un produit</span>
                                </Link>
                            )}

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center p-3 rounded-md transition-colors hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                            >
                                <FaSignOutAlt className="mr-3 h-5 w-5" />
                                <span>Déconnexion</span>
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Vue d'ensemble</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-6 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Commandes</p>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{orders.length}</h3>
                                            </div>
                                            <FaShoppingBag className="h-10 w-10 text-brand-peach dark:text-brand-beige opacity-50" />
                                        </div>
                                    </div>

                                    <div className="bg-brand-sage/10 dark:bg-brand-sage/20 p-6 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Favoris</p>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{favorites.length}</h3>
                                            </div>
                                            <FaHeart className="h-10 w-10 text-brand-sage dark:text-brand-sage opacity-50" />
                                        </div>
                                    </div>

                                    <div className="bg-brand-beige/10 dark:bg-brand-beige/20 p-6 rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Articles en vente</p>
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                                    {listedItems.filter((item) => item.status === "En vente").length}
                                                </h3>
                                            </div>
                                            <FaBox className="h-10 w-10 text-brand-beige dark:text-brand-beige opacity-50" />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Commandes récentes</h3>
                                    {orders.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                <thead className="bg-gray-50 dark:bg-gray-700">
                                                    <tr>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                            N° Commande
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                            Date
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                            Statut
                                                        </th>
                                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                            Total
                                                        </th>
                                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                    {orders.slice(0, 3).map((order) => (
                                                        <tr key={order.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                                #{order.id.toString().padStart(6, "0")}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                                {new Date(order.date).toLocaleDateString()}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span
                                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "Livré"
                                                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                                        }`}
                                                                >
                                                                    {order.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                                {order.total.toFixed(2)} €
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <button className="text-brand-peach dark:text-brand-beige hover:text-brand-peach/70 dark:hover:text-brand-beige/70">
                                                                    Détails
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400">Vous n'avez pas encore de commandes.</p>
                                    )}

                                    {orders.length > 3 && (
                                        <div className="mt-4 text-right">
                                            <button
                                                onClick={() => setActiveTab("orders")}
                                                className="text-brand-peach dark:text-brand-beige hover:underline"
                                            >
                                                Voir toutes les commandes
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                                        Articles récemment mis en vente
                                    </h3>
                                    {listedItems.length > 0 ? (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {listedItems.slice(0, 3).map((item) => (
                                                <div key={item.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                                                    <div className="p-4 flex items-center">
                                                        <img
                                                            src={item.image || "/placeholder.svg"}
                                                            alt={item.name}
                                                            className="w-16 h-16 object-cover rounded-md mr-4"
                                                        />
                                                        <div>
                                                            <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                                                            <p className="text-gray-500 dark:text-gray-400">{item.price.toFixed(2)} €</p>
                                                            <span
                                                                className={`text-xs px-2 py-1 rounded-full ${item.status === "En vente"
                                                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                                                    }`}
                                                            >
                                                                {item.status}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 dark:text-gray-400">Vous n'avez pas encore d'articles en vente.</p>
                                    )}

                                    {listedItems.length > 3 && (
                                        <div className="mt-4 text-right">
                                            <button
                                                onClick={() => setActiveTab("listings")}
                                                className="text-brand-peach dark:text-brand-beige hover:underline"
                                            >
                                                Voir tous mes articles
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Profile Tab */}
                        {activeTab === "profile" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Profil</h2>
                                    <Link
                                        to="/profil"
                                        className="flex items-center text-brand-peach dark:text-brand-beige hover:underline"
                                    >
                                        <FaEdit className="mr-1" />
                                        <span>Modifier</span>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">
                                            Informations personnelles
                                        </h3>
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Nom d'utilisateur</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {userData?.username || "Non défini"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Nom complet</p>
                                                <p className="font-medium text-gray-900 dark:text-white">
                                                    {userData?.firstName && userData?.lastName
                                                        ? `${userData.firstName} ${userData.lastName}`
                                                        : "Non défini"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                                <p className="font-medium text-gray-900 dark:text-white">{userData?.email || "Non défini"}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Téléphone</p>
                                                <p className="font-medium text-gray-900 dark:text-white">{userData?.phone || "Non défini"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Adresse de livraison</h3>
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                            {userData?.deliveryAddress ? (
                                                <p className="font-medium text-gray-900 dark:text-white">{userData.deliveryAddress}</p>
                                            ) : (
                                                <p className="text-gray-500 dark:text-gray-400">Aucune adresse de livraison définie</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Orders Tab */}
                        {activeTab === "orders" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Mes commandes</h2>

                                {orders.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        N° Commande
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Date
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Statut
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Articles
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Total
                                                    </th>
                                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                {orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                                            #{order.id.toString().padStart(6, "0")}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                            {new Date(order.date).toLocaleDateString()}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span
                                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === "Livré"
                                                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                                                    }`}
                                                            >
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                            {order.items}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                            {order.total.toFixed(2)} €
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button className="text-brand-peach dark:text-brand-beige hover:text-brand-peach/70 dark:hover:text-brand-beige/70">
                                                                Détails
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <FaShoppingBag className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Aucune commande</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6">Vous n'avez pas encore passé de commande.</p>
                                        <Link
                                            to="/boutique"
                                            className="inline-flex items-center px-4 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
                                        >
                                            Découvrir la boutique
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Favorites Tab */}
                        {activeTab === "favorites" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Mes favoris</h2>

                                {favorites.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {favorites.map((item) => (
                                            <div key={item.id} className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    className="w-full h-40 object-cover"
                                                />
                                                <div className="p-4">
                                                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">{item.name}</h3>
                                                    <p className="text-brand-peach dark:text-brand-beige font-bold mb-4">
                                                        {item.price.toFixed(2)} €
                                                    </p>
                                                    <div className="flex justify-between">
                                                        <Link
                                                            to={`/boutique/produit/${item.id}`}
                                                            className="text-sm text-brand-peach dark:text-brand-beige hover:underline"
                                                        >
                                                            Voir le produit
                                                        </Link>
                                                        <button className="text-red-500 hover:text-red-700">
                                                            <FaHeart />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <FaHeart className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Aucun favori</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                                            Vous n'avez pas encore ajouté d'articles à vos favoris.
                                        </p>
                                        <Link
                                            to="/boutique"
                                            className="inline-flex items-center px-4 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
                                        >
                                            Découvrir la boutique
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Listings Tab */}
                        {activeTab === "listings" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Mes articles</h2>
                                    <Link
                                        to="/vendre/depot"
                                        className="inline-flex items-center px-4 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
                                    >
                                        <FaPlus className="mr-2" />
                                        Ajouter un article
                                    </Link>
                                </div>

                                {listedItems.length > 0 ? (
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-700">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Article
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Prix
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Statut
                                                    </th>
                                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                                {listedItems.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10">
                                                                    <img
                                                                        className="h-10 w-10 rounded-md object-cover"
                                                                        src={item.image || "/placeholder.svg"}
                                                                        alt={item.name}
                                                                    />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                                            {item.price.toFixed(2)} €
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span
                                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === "En vente"
                                                                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                                                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                                                    }`}
                                                            >
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button className="text-brand-peach dark:text-brand-beige hover:text-brand-peach/70 dark:hover:text-brand-beige/70 mr-3">
                                                                <FaEdit />
                                                            </button>
                                                            {item.status === "En vente" && (
                                                                <button className="text-red-500 hover:text-red-700">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-5 w-5"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <FaBox className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Aucun article</h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                                            Vous n'avez pas encore mis d'articles en vente.
                                        </p>
                                        <Link
                                            to="/vendre/depot"
                                            className="inline-flex items-center px-4 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
                                        >
                                            <FaPlus className="mr-2" />
                                            Ajouter un article
                                        </Link>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === "settings" && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Paramètres</h2>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">
                                            Préférences de notification
                                        </h3>
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Notifications par email</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Recevoir des emails pour les mises à jour de commandes
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-peach/20 dark:peer-focus:ring-brand-beige/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-brand-peach dark:peer-checked:bg-brand-beige"></div>
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Notifications de vente</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Recevoir des notifications quand vos articles sont vendus
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-peach/20 dark:peer-focus:ring-brand-beige/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-brand-peach dark:peer-checked:bg-brand-beige"></div>
                                                </label>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Newsletter</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Recevoir nos actualités et offres spéciales
                                                    </p>
                                                </div>
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" />
                                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-peach/20 dark:peer-focus:ring-brand-beige/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-brand-peach dark:peer-checked:bg-brand-beige"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Sécurité</h3>
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-4">
                                            <button className="w-full flex justify-between items-center text-left">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Changer le mot de passe</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Mettre à jour votre mot de passe</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-gray-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>

                                            <button className="w-full flex justify-between items-center text-left">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Connexions actives</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Gérer les appareils connectés à votre compte
                                                    </p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-gray-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-white">Données personnelles</h3>
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-4">
                                            <button className="w-full flex justify-between items-center text-left">
                                                <div>
                                                    <p className="font-medium text-gray-900 dark:text-white">Télécharger mes données</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                                        Obtenir une copie de vos données personnelles
                                                    </p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 text-gray-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>

                                            <button className="w-full flex justify-between items-center text-left text-red-500 hover:text-red-700">
                                                <div>
                                                    <p className="font-medium">Supprimer mon compte</p>
                                                    <p className="text-sm text-red-400">Cette action est irréversible</p>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
