"use client"
import { TextRevealCard } from "../ui/text-reveal-card"
import { MovingBorder } from "../ui/moving-border"
import { motion } from "framer-motion"

const FeatureSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir /HnaKids> ?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <TextRevealCard
            text="Chez HnaKids, nous croyons en l'économie circulaire et en la durabilité."
            revealText="Donnez une seconde vie aux vêtements"
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Nos produits sont soigneusement sélectionnés pour leur qualité et leur état. Nous vérifions chaque article
              avant de le mettre en vente pour vous garantir des produits en parfait état.
            </p>
          </TextRevealCard>

          <TextRevealCard
            text="Nous proposons des prix justes pour les acheteurs et les vendeurs."
            revealText="Des prix justes pour tous"
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Les vendeurs reçoivent jusqu'à 70% du prix de vente, et les acheteurs bénéficient de prix réduits par
              rapport au neuf. Une situation gagnant-gagnant pour tous !
            </p>
          </TextRevealCard>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/3">
            <div className="group relative w-full max-w-sm mx-auto">
              <MovingBorder
                duration={5000}
                className="h-full w-full rounded-xl p-8 flex items-center justify-center"
                containerClassName="h-60"
                borderClassName="bg-gradient-to-r from-brand-beige via-brand-peach to-brand-sage"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-brand-beige/20 dark:bg-brand-beige/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-brand-peach"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Économique</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Économisez jusqu'à 70% par rapport aux prix du neuf
                  </p>
                </motion.div>
              </MovingBorder>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="group relative w-full max-w-sm mx-auto">
              <MovingBorder
                duration={5000}
                className="h-full w-full rounded-xl p-8 flex items-center justify-center"
                containerClassName="h-60"
                borderClassName="bg-gradient-to-r from-brand-sage via-brand-beige to-brand-peach"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-brand-sage/20 dark:bg-brand-sage/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-brand-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Écologique</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Réduisez votre empreinte carbone en donnant une seconde vie aux vêtements
                  </p>
                </motion.div>
              </MovingBorder>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="group relative w-full max-w-sm mx-auto">
              <MovingBorder
                duration={5000}
                className="h-full w-full rounded-xl p-8 flex items-center justify-center"
                containerClassName="h-60"
                borderClassName="bg-gradient-to-r from-brand-peach via-brand-sage to-brand-beige"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-brand-peach/20 dark:bg-brand-peach/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-brand-beige"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Qualité garantie</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tous nos articles sont vérifiés et en excellent état
                  </p>
                </motion.div>
              </MovingBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
