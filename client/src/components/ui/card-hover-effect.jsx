"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item?.link || idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatedCard hoveredIndex={hoveredIndex} idx={idx} className="h-full w-full">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    {item?.icon}
                    <p className="font-medium text-neutral-600 dark:text-white">{item?.category}</p>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-neutral-900 dark:text-white">{item?.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item?.description}</p>
                </div>
                {item?.link && (
                  <div className="mt-4">
                    <a
                      href={item.link}
                      className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-white"
                    >
                      {item.linkText || "En savoir plus"}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </AnimatedCard>
        </div>
      ))}
    </div>
  )
}

export const AnimatedCard = ({ hoveredIndex, idx, children, className }) => {
  const isHovered = hoveredIndex === idx

  return (
    <div className={cn("relative h-full w-full rounded-xl p-px transition-all duration-300", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-xl opacity-0 transition-opacity",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          background: "linear-gradient(120deg, rgba(120, 119, 198, 0.3), rgba(255, 105, 180, 0.3))",
        }}
      />

      <motion.div
        initial={false}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 0 #0000",
        }}
        className="relative h-full w-full rounded-xl"
      >
        {children}
      </motion.div>
    </div>
  )
}
