"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  offset = 16,
  borderClassName,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className={cn("relative flex h-full w-full items-center justify-center", containerClassName)}
      style={{
        position: "relative",
      }}
    >
      <div className={cn("relative z-10 flex items-center justify-center", className)}>{children}</div>
      <div
        className="absolute inset-0"
        style={{
          borderRadius: borderRadius,
        }}
      >
        <div className="absolute h-full w-full">
          <div
            className={cn(
              "absolute inset-px rounded-[calc(1.75rem-1px)] bg-slate-50 dark:bg-slate-900",
              borderClassName,
            )}
          />
        </div>

        <motion.div
          className="absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, rgba(240, 200, 136, 0.3), rgba(247, 175, 125, 0.3), rgba(126, 181, 151, 0.3))",
          }}
        />

        {isMounted && (
          <motion.div
            className={cn(
              "absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              borderClassName,
            )}
            style={{
              background:
                "linear-gradient(120deg, rgba(240, 200, 136, 0.5), rgba(247, 175, 125, 0.5), rgba(126, 181, 151, 0.5))",
            }}
            animate={{
              background: [
                "linear-gradient(120deg, rgba(240, 200, 136, 0.5), rgba(247, 175, 125, 0.5), rgba(126, 181, 151, 0.5))",
                "linear-gradient(120deg, rgba(247, 175, 125, 0.5), rgba(126, 181, 151, 0.5), rgba(240, 200, 136, 0.5))",
                "linear-gradient(120deg, rgba(126, 181, 151, 0.5), rgba(240, 200, 136, 0.5), rgba(247, 175, 125, 0.5))",
                "linear-gradient(120deg, rgba(240, 200, 136, 0.5), rgba(247, 175, 125, 0.5), rgba(126, 181, 151, 0.5))",
              ],
            }}
            transition={{
              duration: duration / 1000,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        )}
      </div>
    </div>
  )
}
