"use client"
import { useRef, useEffect } from "react"

export const Spotlight = ({ children, className = "", fill = "white" }) => {
  const containerRef = useRef(null)
  const mouseX = useRef(0.5) // Default to center
  const mouseY = useRef(0.5) // Default to center

  const updateSpotlightPosition = () => {
    if (!containerRef.current) return

    const spotlightElement = containerRef.current.querySelector(".spotlight-effect")
    if (spotlightElement) {
      spotlightElement.style.background = `radial-gradient(800px circle at ${mouseX.current * 100}% ${mouseY.current * 100}%, ${fill}, transparent 40%)`
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Set initial spotlight position
    updateSpotlightPosition()

    const onMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      mouseX.current = x / width
      mouseY.current = y / height

      updateSpotlightPosition()
    }

    const container = containerRef.current
    container.addEventListener("mousemove", onMouseMove)

    return () => {
      if (container) {
        container.removeEventListener("mousemove", onMouseMove)
      }
    }
  }, [fill])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {children}
      <div className="spotlight-effect pointer-events-none absolute inset-0" />
    </div>
  )
}
