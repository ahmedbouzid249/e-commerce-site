"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { WavyBackground } from "../ui/wavy-background"
import { Sparkles } from "../ui/sparkles"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")
    }, 1500)
  }

  return (
    <WavyBackground
      className="max-w-7xl mx-auto py-20 px-4"
      waveOpacity={0.3}
      blur={10}
      colors={["#F0C888", "#F7AF7D", "#7EB597"]} // Using brand colors
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            <Sparkles color="#F7AF7D">Restez informé de nos nouveautés</Sparkles>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières offres, conseils et actualités sur la mode
            enfantine durable.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-sage/20 dark:bg-brand-sage/10 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-brand-sage dark:text-brand-sage mb-2">
                Merci pour votre inscription !
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Vous recevrez bientôt nos dernières actualités et offres spéciales.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-brand-peach hover:bg-brand-peach/90 text-white font-medium rounded-lg transition-colors ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Inscription...
                  </span>
                ) : (
                  "S'inscrire"
                )}
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            En vous inscrivant, vous acceptez de recevoir nos emails et confirmez avoir lu notre{" "}
            <a href="/confidentialite" className="underline hover:text-brand-peach dark:hover:text-brand-beige">
              politique de confidentialité
            </a>
            .
          </p>
        </motion.div>
      </div>
    </WavyBackground>
  )
}

export default NewsletterSection
