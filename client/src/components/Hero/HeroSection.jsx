"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Spotlight } from "../ui/spotlight"
import { Link } from "react-router-dom"
// Import the image directly - with explicit path
import heroImage from "../../assets/images/hero-image.jpg"

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Try to preload the image
    const img = new Image()
    img.onload = () => {
      setImageLoaded(true)
    }
    img.onerror = (e) => {
      console.error("Failed to load hero image:", e)
      setImageError(true)
    }
    img.src = heroImage
  }, [])

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center rounded-lg">
      {/* Fallback gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-sage/30 via-brand-peach/30 to-brand-beige/30"
        style={{ zIndex: 0 }}
      />

      {/* Image with explicit handling - Using img tag with object-fit and object-position */}
      {!imageError && (
        <img
          src={heroImage || "/placeholder.svg"}
          alt="Mother and baby with children's clothing"
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            zIndex: 1,
            objectFit: "cover",
            objectPosition: "60% 30%", // Adjusted: 60% horizontal, 30% vertical (lower % moves up)
          }}
          onError={(e) => {
            console.error("Failed to load hero image:", e)
            setImageError(true)
          }}
        />
      )}

      {/* Overlay gradient for better text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50"
        style={{ zIndex: 2 }}
      />

      {/* Spotlight effect */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        <Spotlight fill="rgba(247, 175, 125, 0.3)" /> {/* Using brand-peach color */}
      </div>

      {/* Content */}
      <div className="p-4 relative z-10 w-full text-center" style={{ zIndex: 4 }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Donnez une seconde vie <br /> aux vêtements de vos enfants
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Achetez et vendez des vêtements, jouets et accessoires pour enfants de qualité à prix réduits
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/boutique"
            className="px-8 py-3 bg-brand-peach text-white rounded-full font-medium hover:bg-brand-peach/90 transition-colors"
          >
            Découvrir la boutique
          </Link>
          <Link
            to="/vendre"
            className="px-8 py-3 bg-transparent border border-brand-beige text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            Comment vendre
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
