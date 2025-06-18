"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export const Card3D = ({ children, className, containerClassName }) => {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null)

  const handleMouseMove = (e) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const newMouseX = e.clientX - rect.left
      const newMouseY = e.clientY - rect.top
      setMouseX(newMouseX)
      setMouseY(newMouseY)
    }
  }

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(width / 2)
        setMouseY(height / 2)
      }, 100),
    )
  }

  const handleMouseEnter = () => {
    if (mouseLeaveDelay) clearTimeout(mouseLeaveDelay)
    setMouseLeaveDelay(null)
  }

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
      setMouseX(ref.current.offsetWidth / 2)
      setMouseY(ref.current.offsetHeight / 2)
    }
  }, [])

  const rotateX = mouseY / height - 0.5
  const rotateY = -(mouseX / width - 0.5)

  return (
    <div
      className={cn("perspective-1000", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      <motion.div
        className={cn("preserve-3d relative w-full h-full", className)}
        style={{
          transform: `rotateX(${rotateX * 10}deg) rotateY(${rotateY * 10}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  return (
    <Tag
      className={cn("absolute inset-0", className)}
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
        transformStyle: "preserve-3d",
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
