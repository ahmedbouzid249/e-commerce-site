"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

const Sparkles = ({ children, className, id, color = "#F7AF7D", size = 20, ...props }) => {
  const [sparkles, setSparkles] = useState([])
  const ref = useRef(null)
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    // Check for reduced motion preference
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  const generateSparkle = useCallback(() => {
    if (prefersReducedMotion.current) return null

    return {
      id: Math.random().toString(36).substring(2),
      createdAt: Date.now(),
      size: Math.random() * size + size / 2,
      style: {
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        zIndex: 2,
      },
    }
  }, [size])

  useEffect(() => {
    if (prefersReducedMotion.current) return

    const interval = setInterval(() => {
      const now = Date.now()
      const sparkle = generateSparkle()
      if (sparkle) {
        const nextSparkles = [...sparkles, sparkle].filter((sp) => {
          const delta = now - sp.createdAt
          return delta < 1000
        })
        setSparkles(nextSparkles)
      }
    }, 50)

    return () => clearInterval(interval)
  }, [sparkles, generateSparkle])

  return (
    <span ref={ref} className={`relative inline-block ${className}`} {...props}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={color}
          size={sparkle.size}
          style={sparkle.style}
          prefersReducedMotion={prefersReducedMotion.current}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  )
}

const Sparkle = ({ color, size, style, prefersReducedMotion }) => {
  const path =
    "M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      className="absolute"
      initial={{ scale: 0, rotate: 0, opacity: 0 }}
      animate={
        prefersReducedMotion
          ? {}
          : {
              scale: [0, 1, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? {}
          : {
              duration: 1,
              ease: "easeInOut",
            }
      }
    >
      <motion.path d={path} fill={color} />
    </motion.svg>
  )
}

export { Sparkles }
