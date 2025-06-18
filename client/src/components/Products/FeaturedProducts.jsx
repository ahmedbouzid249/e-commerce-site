"use client"
import { motion } from "framer-motion"
import { Card3D, CardItem } from "../ui/3d-card"
import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    name: "T-shirt Coton Bio",
    price: 19.99,
    image: "/placeholder.svg?height=250&width=250&text=T-shirt",
    category: "Vêtements",
    age: "3-4 ans",
    condition: "Comme neuf",
  },
  {
    id: 2,
    name: "Jeans Slim",
    price: 24.99,
    image: "/placeholder.svg?height=250&width=250&text=Jeans",
    category: "Vêtements",
    age: "5-6 ans",
    condition: "Bon état",
  },
  {
    id: 3,
    name: "Chaussures de Sport",
    price: 34.99,
    image: "/placeholder.svg?height=250&width=250&text=Chaussures",
    category: "Chaussures",
    age: "4-5 ans",
    condition: "Comme neuf",
  },
]

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Produits en vedette</h2>
          <Link
            to="/boutique"
            className="text-gray-600 hover:text-brand-peach dark:text-gray-400 dark:hover:text-brand-beige flex items-center"
          >
            Voir tout
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProductCard = ({ product }) => {
  return (
    <Card3D containerClassName="w-full h-[400px]" className="w-full h-full">
      <CardItem
        as={motion.div}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative h-[250px] overflow-hidden">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            {product.condition}
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="font-bold text-lg text-brand-peach dark:text-brand-beige">
              {product.price.toFixed(2)} DT
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
            <span>{product.category}</span>
            <span>{product.age}</span>
          </div>
          <button className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-brand-peach transition-colors">
            Ajouter au panier
          </button>
        </div>
      </CardItem>
      <CardItem
        translateZ={50}
        as="div"
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-beige/20 to-brand-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </Card3D>
  )
}

export default FeaturedProducts
