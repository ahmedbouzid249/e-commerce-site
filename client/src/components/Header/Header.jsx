"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaShoppingCart, FaSearch, FaTimes, FaChevronDown, FaSignOutAlt, FaCog } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
// Import the logo
import logo from "../../assets/images/logo.png"
import ThemeToggle from "../ThemeToggle/ThemeToggle"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [recentSearches, setRecentSearches] = useState(["Vêtements enfants", "Chaussures bébé", "Jouets 3 ans"])
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)
  const searchRef = useRef(null)
  const userMenuRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Check if user is authenticated
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
      fetchUserData()
    }
  }, [])

  // Categories for suggestions
  const categories = [
    { name: "Vêtements", count: 120 },
    { name: "Chaussures", count: 45 },
    { name: "Jouets", count: 78 },
    { name: "Accessoires", count: 36 },
    { name: "Livres", count: 24 },
  ]

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false)
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Mock search function
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    setShowResults(true)

    // Simulate API call delay
    const timer = setTimeout(() => {
      // Mock data - replace with actual search logic
      const mockProducts = [
        { id: 1, name: "T-shirt enfant", category: "Vêtements", price: 19.99, image: "/placeholder.svg" },
        { id: 2, name: "Pantalon jean", category: "Vêtements", price: 29.99, image: "/placeholder.svg" },
        { id: 3, name: "Chaussures sport", category: "Chaussures", price: 39.99, image: "/placeholder.svg" },
        { id: 4, name: "Peluche ours", category: "Jouets", price: 15.99, image: "/placeholder.svg" },
        { id: 5, name: "Livre enfant", category: "Livres", price: 12.99, image: "/placeholder.svg" },
      ]

      const filtered = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setSearchResults(filtered)
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() !== "") {
      // Save to recent searches if not already there
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches((prev) => [searchQuery, ...prev.slice(0, 4)])
      }

      // Here you would typically redirect to search results page
      console.log("Searching for:", searchQuery)
      setShowResults(false)
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsAuthenticated(false)
    setUserData(null)
    setIsUserMenuOpen(false)
    navigate("/login")
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-50"
      style={{ position: "sticky", top: 0 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo || "/placeholder.svg"} alt="HnaKids Logo" className="h-10 w-10 rounded-full" />
            <span className="text-xl font-bold text-brand-peach dark:text-brand-beige">HnaKids</span>
          </Link>

          {/* Search Bar - Centered */}
          <div className="flex-1 max-w-3xl mx-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Rechercher des vêtements, jouets, accessoires..."
                  className="w-full py-2.5 pl-10 pr-10 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:text-white text-sm bg-white/90 dark:bg-gray-800/90"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setShowResults(true)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <FaTimes className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
                  >
                    {isSearching ? (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                        <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                        <p className="mt-2">Recherche en cours...</p>
                      </div>
                    ) : searchQuery.trim() !== "" ? (
                      searchResults.length > 0 ? (
                        <div>
                          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                              Résultats pour "{searchQuery}"
                            </h3>
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            {searchResults.map((product) => (
                              <Link
                                key={product.id}
                                to={`/boutique/produit/${product.id}`}
                                className="flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => setShowResults(false)}
                              >
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden mr-3">
                                  <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                                </div>
                                <p className="font-bold text-brand-peach dark:text-brand-beige ml-4">
                                  {product.price.toFixed(2)} €
                                </p>
                              </Link>
                            ))}
                          </div>
                          <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                            <Link
                              to={`/boutique/search?q=${encodeURIComponent(searchQuery)}`}
                              className="text-sm text-brand-peach dark:text-brand-beige hover:underline flex items-center justify-center"
                              onClick={() => setShowResults(false)}
                            >
                              Voir tous les résultats
                              <FaChevronDown className="ml-1 h-3 w-3 rotate-270" />
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                          <p>Aucun résultat trouvé pour "{searchQuery}"</p>
                          <p className="text-sm mt-1">Essayez avec d'autres mots-clés ou parcourez nos catégories</p>
                        </div>
                      )
                    ) : (
                      <div>
                        {/* Recent Searches */}
                        {recentSearches.length > 0 && (
                          <div>
                            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                Recherches récentes
                              </h3>
                            </div>
                            <div className="p-2 flex flex-wrap gap-2">
                              {recentSearches.map((search, index) => (
                                <button
                                  key={index}
                                  onClick={() => {
                                    setSearchQuery(search)
                                  }}
                                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                >
                                  {search}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Categories */}
                        <div>
                          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                              Catégories populaires
                            </h3>
                          </div>
                          <div className="grid grid-cols-2 gap-2 p-3">
                            {categories.map((category, index) => (
                              <Link
                                key={index}
                                to={`/boutique/${category.name.toLowerCase()}`}
                                className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                onClick={() => setShowResults(false)}
                              >
                                <span className="text-gray-800 dark:text-gray-200">{category.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                                  {category.count}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-brand-peach dark:hover:text-brand-beige"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-peach/20 dark:bg-brand-beige/20 flex items-center justify-center text-brand-peach dark:text-brand-beige">
                    {userData?.firstName?.charAt(0) || userData?.username?.charAt(0) || "U"}
                  </div>
                  <span className="hidden sm:inline">{userData?.firstName || userData?.username || "Utilisateur"}</span>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <FaUser className="mr-2" />
                          <span>Tableau de bord</span>
                        </div>
                      </Link>
                      <Link
                        to="/profil"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <FaCog className="mr-2" />
                          <span>Paramètres</span>
                        </div>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-center">
                          <FaSignOutAlt className="mr-2" />
                          <span>Déconnexion</span>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-brand-peach dark:hover:text-brand-beige"
              >
                <FaUser className="h-5 w-5" />
                <span className="hidden sm:inline">Connexion</span>
              </Link>
            )}

            <Link
              to="/panier"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-brand-peach dark:hover:text-brand-beige"
            >
              <FaShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Panier</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
