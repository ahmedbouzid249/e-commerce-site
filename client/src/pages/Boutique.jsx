"use client"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card3D, CardItem } from "../components/ui/3d-card"
import { BrandFilter } from "../components/ui/brand-filter"
import { clothingBrands } from "../data/brands"

const Boutique = () => {
  const { category } = useParams()
  const [selectedFilters, setSelectedFilters] = useState({
    price: null,
    age: null,
    color: null,
    brand: null,
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Format the category name for display
  const formatCategoryName = (cat) => {
    if (!cat) return "Tous les produits"

    // Convert kebab-case to normal text and capitalize first letter
    const formatted = cat.replace(/-/g, " ")
    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
  }

  const pageTitle = category ? `Boutique - ${formatCategoryName(category)}` : "Boutique - Tous les produits"

  // Filter products based on category
  const filterProductsByCategory = (products, cat) => {
    if (!cat) return products

    return products.filter((product) => product.category.toLowerCase() === cat.toLowerCase())
  }

  // Sample products data
  const allProducts = Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    name: `Produit ${index + 1}`,
    description: "Description du produit",
    price: 19.99 + index * 2,
    image: "/placeholder.svg",
    category: ["Vêtements", "Jouets", "Accessoires", "Chaussures", "Puériculture", "Livres"][index % 6],
    age: ["0-1 an", "1-2 ans", "2-3 ans", "3-4 ans", "4-5 ans", "5-6 ans"][index % 6],
    color: ["Rouge", "Bleu", "Vert", "Jaune", "Rose", "Violet"][index % 6],
    brand: clothingBrands[index % clothingBrands.length].id,
    brandName: clothingBrands[index % clothingBrands.length].name,
    condition: ["Neuf", "Comme neuf", "Bon état", "État correct"][index % 4],
  }))

  // Filter products based on the current category and selected filters
  let products = filterProductsByCategory(allProducts, category)

  // Apply brand filter if selected
  if (selectedFilters.brand) {
    products = products.filter((product) => product.brand === selectedFilters.brand)
  }

  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type] === value ? null : value,
    }))
  }

  const handleBrandSelect = (brandId) => {
    setSelectedFilters((prev) => ({
      ...prev,
      brand: brandId,
    }))
  }

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        {pageTitle}
      </motion.h1>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full py-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filtres
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`${isFilterOpen ? "block" : "hidden"} md:block col-span-1 space-y-6`}
        >
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Filtres</h2>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Marque</h3>
              <BrandFilter onBrandSelect={handleBrandSelect} selectedBrand={selectedFilters.brand} />
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Prix</h3>
              <div className="space-y-2">
                {["0-20€", "20-50€", "50-100€", "100€+"].map((price) => (
                  <div key={price} className="flex items-center">
                    <button
                      onClick={() => toggleFilter("price", price)}
                      className={`w-4 h-4 rounded-sm border mr-2 ${selectedFilters.price === price ? "bg-gray-800 border-gray-800" : "border-gray-300"
                        }`}
                    ></button>
                    <span>{price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Age Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Âge</h3>
              <div className="space-y-2">
                {["0-1 an", "1-2 ans", "2-3 ans", "3-4 ans", "4-5 ans", "5-6 ans"].map((age) => (
                  <div key={age} className="flex items-center">
                    <button
                      onClick={() => toggleFilter("age", age)}
                      className={`w-4 h-4 rounded-sm border mr-2 ${selectedFilters.age === age ? "bg-gray-800 border-gray-800" : "border-gray-300"
                        }`}
                    ></button>
                    <span>{age}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Couleur</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Rouge", color: "bg-red-500" },
                  { name: "Bleu", color: "bg-blue-500" },
                  { name: "Vert", color: "bg-green-500" },
                  { name: "Jaune", color: "bg-yellow-500" },
                  { name: "Rose", color: "bg-pink-500" },
                  { name: "Violet", color: "bg-purple-500" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => toggleFilter("color", color.name)}
                    className={`w-8 h-8 rounded-full ${color.color} ${selectedFilters.color === color.name ? "ring-2 ring-offset-2 ring-gray-800" : ""
                      }`}
                    title={color.name}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card3D containerClassName="w-full h-[350px]" className="w-full h-full">
                  <CardItem className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm">
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.condition}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <span className="font-bold text-lg">{product.price.toFixed(2)} €</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{product.category}</span>
                        <span>{product.age}</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-500 mb-4">Marque: {product.brandName}</div>
                      <button className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                        Ajouter au panier
                      </button>
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ={50}
                    as="div"
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Empty state when no products match filters */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="text-xl font-semibold mt-4">Aucun produit trouvé</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Essayez de modifier vos filtres pour voir plus de produits
              </p>
              <button
                onClick={() => setSelectedFilters({ price: null, age: null, color: null, brand: null })}
                className="mt-4 px-4 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}

          {/* Pagination */}
          {products.length > 0 && (
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Précédent
                </button>
                <button className="px-4 py-2 border rounded-md bg-gray-800 text-white">1</button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Suivant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Boutique
