"use client"

import { useEffect, useState, useRef } from "react"

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    }
  })

  const [scope, setScope] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(wordsArray[0])
  const [isAnimating, setIsAnimating] = useState(false)

  // Use refs to store values that shouldn't trigger re-renders
  const wordsArrayLength = useRef(wordsArray.length)
  const animationRef = useRef(null)

  // Set the current word when the index changes
  useEffect(() => {
    setCurrentWord(wordsArray[currentWordIndex])
  }, [currentWordIndex, wordsArray])

  // Handle the animation sequence
  useEffect(() => {
    if (!scope || isAnimating) return

    const runAnimation = async () => {
      setIsAnimating(true)

      try {
        // Display each character one by one
        const spans = scope.querySelectorAll("span:not(.cursor)")
        for (let i = 0; i < spans.length; i++) {
          spans[i].style.display = "inline-block"
          spans[i].style.opacity = "1"
          await new Promise((resolve) => setTimeout(resolve, 100))
        }

        // Wait before starting to hide characters
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Hide the cursor
        const cursor = scope.querySelector(".cursor")
        if (cursor) cursor.style.opacity = "0"

        // Hide each character one by one, from last to first
        for (let i = spans.length - 1; i >= 0; i--) {
          spans[i].style.opacity = "0"
          await new Promise((resolve) => setTimeout(resolve, 50))
        }

        // Wait before moving to next word
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Show the cursor again
        if (cursor) cursor.style.opacity = "1"

        // Move to the next word
        setCurrentWordIndex((prev) => (prev + 1) % wordsArrayLength.current)
      } finally {
        setIsAnimating(false)
      }
    }

    // Start the animation
    animationRef.current = setTimeout(() => {
      runAnimation()
    }, 100)

    // Clean up on unmount or when dependencies change
    return () => {
      clearTimeout(animationRef.current)
    }
  }, [scope, currentWord, isAnimating])

  return (
    <div className={className}>
      <div ref={setScope} className="inline">
        {currentWord.text.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={`inline-block opacity-0 ${currentWord.className}`}
            style={{ display: "none" }}
          >
            {char}
          </span>
        ))}
        <span className={`cursor inline-block ${cursorClassName}`}>|</span>
      </div>
    </div>
  )
}

export const TypewriterEffectSmooth = ({ words, className, cursorClassName }) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text,
    }
  })

  const [scope, setScope] = useState(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentWord, setCurrentWord] = useState(wordsArray[0])
  const [isAnimating, setIsAnimating] = useState(false)

  // Use refs to store values that shouldn't trigger re-renders
  const wordsArrayLength = useRef(wordsArray.length)
  const animationRef = useRef(null)

  useEffect(() => {
    setCurrentWord(wordsArray[currentWordIndex])
  }, [currentWordIndex, wordsArray])

  useEffect(() => {
    if (!scope || isAnimating) return

    const runAnimation = async () => {
      setIsAnimating(true)

      try {
        // Show the cursor
        const cursor = scope.querySelector(".cursor")
        if (cursor) cursor.style.opacity = "1"

        // Type the word
        const wordElement = scope.querySelector(".word")
        if (wordElement) {
          wordElement.style.width = "0%"
          await new Promise((resolve) => setTimeout(resolve, 100))
          wordElement.style.width = "100%"
          wordElement.style.transition = "width 1s ease-in-out"
        }

        // Wait before deleting
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Hide the cursor
        if (cursor) {
          cursor.style.opacity = "0"
          cursor.style.transition = "opacity 0.5s ease-in-out"
        }

        // Delete the word
        if (wordElement) {
          wordElement.style.width = "0%"
          wordElement.style.transition = "width 0.5s ease-in-out"
        }

        // Wait before moving to next word
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Move to the next word
        setCurrentWordIndex((prev) => (prev + 1) % wordsArrayLength.current)
      } finally {
        setIsAnimating(false)
      }
    }

    // Start the animation
    animationRef.current = setTimeout(() => {
      runAnimation()
    }, 100)

    // Clean up on unmount or when dependencies change
    return () => {
      clearTimeout(animationRef.current)
    }
  }, [scope, currentWord, isAnimating])

  return (
    <div className={className}>
      <div ref={setScope} className="inline-flex">
        <div className="word overflow-hidden whitespace-nowrap" style={{ width: "0%" }}>
          <span className={`${currentWord.className}`}>{currentWord.text}</span>
        </div>
        <span className={`cursor ${cursorClassName}`} style={{ opacity: 0 }}>
          |
        </span>
      </div>
    </div>
  )
}
