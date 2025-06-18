"use client"
import { motion } from "framer-motion"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const defaultColors = ["#F0C888", "#F7AF7D", "#7EB597", "#F0C888", "#F7AF7D"]
  const fillColors = colors || defaultColors

  // Determine speed multiplier
  let speedMultiplier
  switch (speed) {
    case "slow":
      speedMultiplier = 1
      break
    case "fast":
      speedMultiplier = 2
      break
    default:
      speedMultiplier = 1.5
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black ${containerClassName}`}
      {...props}
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            {/* Create a filter with the specified blur */}
            <filter id="blurMe">
              <feGaussianBlur in="SourceGraphic" stdDeviation={blur} />
            </filter>
          </defs>
          <g filter="url(#blurMe)">
            {fillColors.map((color, index) => (
              <motion.path
                key={index}
                d={`M 0 ${20 + index * 2} Q ${waveWidth || 50} ${
                  20 + (index % 2 === 0 ? -10 : 10)
                }, 100 ${20 + index * 2} T 200 ${20 + index * 2} V 100 H 0 V ${20 + index * 2}`}
                fill={color}
                opacity={waveOpacity}
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2 / speedMultiplier,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            ))}
          </g>
          <rect x="0" y="0" width="100" height="100" fill={backgroundFill || "transparent"} />
        </svg>
      </div>
      <div className={`relative z-10 w-full ${className}`}>{children}</div>
    </div>
  )
}
