"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"
import { FaTshirt, FaGamepad, FaBaby, FaBook } from "react-icons/fa"
import { GiRunningShoe, GiPillow, GiBabyBottle } from "react-icons/gi"

const CategoryImage = ({ category }) => {
  return (
    <div className="relative w-full h-32 rounded-lg overflow-hidden group">
      <img
        src={`/placeholder-graphic.png?height=128&width=256&text=${category}`}
        alt={category}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
      <div className="absolute bottom-3 right-3">
        <span className="px-3 py-1 bg-brand-peach text-white text-xs font-medium rounded-full">Explorer</span>
      </div>
    </div>
  )
}

const categories = [
  {
    title: "Vêtements",
    description: "T-shirts, pantalons, robes, vestes et plus encore pour tous les âges.",
    link: "/boutique/vetements",
    icon: <FaTshirt className="h-5 w-5 text-brand-peach" />,
  },
  {
    title: "Jouets",
    description: "Jouets éducatifs, peluches, jeux de société et jouets d'extérieur.",
    link: "/boutique/jouets",
    icon: <FaGamepad className="h-5 w-5 text-brand-sage" />,
  },
  {
    title: "Accessoires",
    description: "Sacs, bonnets, écharpes, gants et autres accessoires pour enfants.",
    link: "/boutique/accessoires",
    icon: <GiPillow className="h-5 w-5 text-brand-beige" />,
  },
  {
    title: "Chaussures",
    description: "Baskets, sandales, bottes et chaussures de ville pour tous les âges.",
    link: "/boutique/chaussures",
    icon: <GiRunningShoe className="h-5 w-5 text-brand-peach" />,
    featured: true,
  },
  {
    title: "Puériculture",
    description: "Poussettes, sièges auto, lits bébé et autres articles de puériculture.",
    link: "/boutique/puericulture",
    icon: <GiBabyBottle className="h-5 w-5 text-brand-sage" />,
  },
  {
    title: "Livres",
    description: "Livres pour enfants de tous âges, albums, romans et livres éducatifs.",
    link: "/boutique/livres",
    icon: <FaBook className="h-5 w-5 text-brand-beige" />,
  },
  {
    title: "Tout explorer",
    description: "Découvrez notre collection complète de produits pour enfants de qualité à prix réduits.",
    link: "/boutique",
    icon: <FaBaby className="h-5 w-5 text-brand-peach" />,
    featured: true,
  },
]

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Nos catégories
        </motion.h2>

        <BentoGrid className="max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <Link key={i} to={category.link} className="block no-underline">
              <BentoGridItem
                title={category.title}
                description={category.description}
                header={<CategoryImage category={category.title} />}
                icon={category.icon}
                className={category.featured ? "md:col-span-2" : ""}
              />
            </Link>
          ))}
        </BentoGrid>

        <div className="flex justify-center mt-8">
          <Link
            to="/boutique"
            className="px-6 py-3 bg-brand-peach text-white rounded-full font-medium hover:bg-brand-peach/90 transition-colors"
          >
            Voir tous les produits
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategorySection
