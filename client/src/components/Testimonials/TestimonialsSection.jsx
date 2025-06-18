"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

// Import the testimonial images
import hamdiImg from "../../assets/images/hamdi.jpg"
import zainebImg from "../../assets/images/zaineb.jpg"
import molkaImg from "../../assets/images/molka.jpg"
import alaImg from "../../assets/images/ala.jpg"
import fattoumaImg from "../../assets/images/fattouma.jpg"

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Le processus de vente est super simple. Je dépose les vêtements, ils s'occupent de tout et je reçois l'argent une fois vendus. Je recommande vivement !",
      name: "Hamdi Ben Jarrar",
      designation: "Papa d'un garçon de 4 ans",
      src: hamdiImg,
    },
    {
      quote:
        "J'ai découvert HnaKids il y a 6 mois et je suis ravie ! J'ai pu vendre les vêtements que mes enfants ne portaient plus et acheter de nouvelles tenues à prix réduits.",
      name: "Zaineb Hechich",
      designation: "Maman de 2 enfants",
      src: zainebImg,
    },
    {
      quote:
        "La qualité des vêtements est excellente, on ne dirait pas qu'ils sont d'occasion. J'apprécie aussi l'aspect écologique de la démarche.",
      name: "Molka Boudali",
      designation: "Maman de 3 enfants",
      src: molkaImg,
    },
    {
      quote:
        "Mes enfants adorent les jouets que j'ai achetés sur HnaKids. Des prix abordables pour des produits de qualité, c'est parfait !",
      name: "Alaa Chiba",
      designation: "Papa de 2 enfants",
      src: alaImg,
    },
    {
      quote:
        "Le service client est exceptionnel. J'ai eu un petit souci avec ma commande et tout a été résolu en quelques heures. Bravo !",
      name: "Fattouma Sana",
      designation: "Maman d'un bébé de 10 mois",
      src: fattoumaImg,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Témoignages
        </motion.h2>

        <div className="h-[400px] md:h-[300px] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/temoignages"
            className="inline-flex items-center text-gray-700 hover:text-brand-peach dark:text-gray-300 dark:hover:text-brand-beige font-medium"
          >
            Voir tous les témoignages
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
