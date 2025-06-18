"use client"
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Sparkles } from "../components/ui/sparkles"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [relatedProducts, setRelatedProducts] = useState([])

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockProduct = {
        id: Number.parseInt(id),
        name: "T-shirt Coton Bio",
        price: 19.99,
        originalPrice: 39.99,
        description:
          "T-shirt en coton bio pour enfant, doux et confortable. Parfait pour toutes les saisons. Lavable en machine à 30°C.",
        condition: "Comme neuf",
        brand: "Petit Bateau",
        size: "4 ans",
        color: "Bleu marine",
        material: "100% coton bio",
        category: "Vêtements",
        inStock: true,
        images: [
          "/placeholder.svg?height=600&width=600&text=T-shirt+1",
          "/placeholder.svg?height=600&width=600&text=T-shirt+2",
          "/placeholder.svg?height=600&width=600&text=T-shirt+3",
          "/placeholder.svg?height=600&width=600&text=T-shirt+4",
        ],
        features: [
          "Coton bio certifié",
          "Sans produits chimiques nocifs",
          "Doux pour la peau sensible",
          "Résistant aux lavages fréquents",
        ],
      }

      const mockRelatedProducts = [
        {
          id: 101,
          name: "Pantalon Jean",
          price: 24.99,
          image: "/placeholder.svg?height=300&width=300&text=Pantalon",
          category: "Vêtements",
          condition: "Bon état",
        },
        {
          id: 102,
          name: "Chaussures de Sport",
          price: 34.99,
          image: "/placeholder.svg?height=300&width=300&text=Chaussures",
          category: "Chaussures",
          condition: "Comme neuf",
        },
        {
          id: 103,
          name: "Pull en Laine",
          price: 29.99,
          image: "/placeholder.svg?height=300&width=300&text=Pull",
          category: "Vêtements",
          condition: "Très bon état",
        },
      ]

      setProduct(mockProduct)
      setRelatedProducts(mockRelatedProducts)
      setLoading(false)
    }, 1000)
  }, [id])

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10)) // Limit to 10 items
  }

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1)) // Minimum 1 item
  }

  const addToCart = () => {
    // In a real app, this would add the product to the cart
    alert(`${quantity} x ${product.name} ajouté au panier`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-peach"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Produit non trouvé</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Désolé, le produit que vous recherchez n'existe pas ou a été retiré.
        </p>
        <Link
          to="/boutique"
          className="px-6 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
        >
          Retour à la boutique
        </Link>
      </div>
    )
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige"
              >
                Accueil
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  to="/boutique"
                  className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige"
                >
                  Boutique
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  to={`/boutique/${product.category.toLowerCase()}`}
                  className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige"
                >
                  {product.category}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-3 h-3 text-gray-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-500 dark:text-gray-400">{product.name}</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? "border-brand-peach dark:border-brand-beige" : "border-transparent"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-brand-peach dark:text-brand-beige mr-3">
              {product.price.toFixed(2)} DT
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-500 line-through mr-3">{product.originalPrice.toFixed(2)} DT</span>
                <span className="px-2 py-1 bg-brand-peach/10 text-brand-peach dark:bg-brand-beige/10 dark:text-brand-beige rounded-md text-sm font-medium">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
              <span className="text-green-600 dark:text-green-400 font-medium">
                {product.inStock ? "En stock" : "Rupture de stock"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-medium mr-2">
                {product.condition}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ID: {product.id.toString().padStart(6, "0")}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Détails</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Marque:</span> {product.brand}
                  </li>
                  <li>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Taille:</span> {product.size}
                  </li>
                  <li>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Couleur:</span> {product.color}
                  </li>
                  <li>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Matière:</span> {product.material}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Caractéristiques</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-brand-peach dark:text-brand-beige mt-0.5 mr-1.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="flex border rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-1 border-r hover:bg-gray-100 dark:hover:bg-gray-800"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 flex items-center justify-center">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-1 border-l hover:bg-gray-100 dark:hover:bg-gray-800"
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">10 disponibles</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={addToCart}
                className="px-6 py-3 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors flex-1"
              >
                Ajouter au panier
              </button>
              <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="font-medium mb-3">Livraison et retours</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-brand-peach dark:text-brand-beige mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                Livraison en 2-5 jours ouvrables
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-brand-peach dark:text-brand-beige mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                  />
                </svg>
                Retours gratuits sous 14 jours
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          <Sparkles color="#F7AF7D">Vous aimerez aussi</Sparkles>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/boutique/produit/${product.id}`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-brand-peach dark:text-brand-beige">
                      {product.price.toFixed(2)} DT
                    </span>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {product.condition}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
