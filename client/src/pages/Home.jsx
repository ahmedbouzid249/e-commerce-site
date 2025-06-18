"use client"

import HeroSection from "../components/Hero/HeroSection"
import FeaturedProducts from "../components/Products/FeaturedProducts"
import CategorySection from "../components/Categories/CategorySection"
import FeatureSection from "../components/Features/FeatureSection"
import TestimonialsSection from "../components/Testimonials/TestimonialsSection"
import NewsletterSection from "../components/Newsletter/NewsletterSection"
import HowItWorksSection from "../components/HowItWorks/HowItWorksSection"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />

      <CategorySection />

      <HowItWorksSection />

      <FeatureSection />

      <section className="py-16 bg-gray-100 dark:bg-gray-800 rounded-lg my-12">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Prêt à vendre vos articles ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Gagnez de l'argent en vendant les vêtements et jouets que vos enfants n'utilisent plus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/vendre"
              className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
            >
              Comment ça marche
            </Link>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      <NewsletterSection />
    </div>
  )
}

export default Home
