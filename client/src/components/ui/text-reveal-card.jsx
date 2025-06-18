"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const TextRevealCard = ({ text, revealText, children, className }) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef(null)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStartAnimation(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )

      observer.observe(cardRef.current)
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (startAnimation) {
      setWidthPercentage(100)
    }
  }, [startAnimation])

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black",
        className,
      )}
    >
      <div className="relative z-10">
        <div className="text-base font-normal text-neutral-700 dark:text-neutral-300">{text}</div>
        <div className="mt-6 text-3xl font-bold text-neutral-900 dark:text-white">{revealText}</div>
        <div className="mt-4">{children}</div>
      </div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: `${widthPercentage}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-r from-transparent via-brand-beige/20 to-brand-beige/30 dark:from-transparent dark:via-brand-beige/10 dark:to-brand-beige/20"
      />
    </div>
  )
}
