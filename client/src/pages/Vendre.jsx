"use client"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaTshirt, FaCamera, FaMoneyBillWave, FaTruck, FaClipboardList, FaPercent } from "react-icons/fa"
import { BrandSelector } from "../components/ui/brand-selector"
import { useState } from "react"

const Vendre = () => {
  const { section } = useParams()
  const [selectedBrand, setSelectedBrand] = useState(null)

  const handleBrandSelect = (brandId) => {
    setSelectedBrand(brandId)
  }

  // Content based on section
  const renderContent = () => {
    switch (section) {
      case "depot":
        return (
          <>
            <h1 className="text-3xl font-bold mb-6">Déposer des articles</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 prose max-w-none dark:prose-invert">
              <p className="text-lg">Pour déposer vos articles, suivez ces étapes simples :</p>
              <ol className="space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-2 rounded-full mr-3 mt-1">
                    <span className="text-brand-peach font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Créez un compte ou connectez-vous</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Si vous n'avez pas encore de compte, vous pouvez en créer un en quelques minutes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-2 rounded-full mr-3 mt-1">
                    <span className="text-brand-peach font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Préparez vos articles</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Assurez-vous que vos vêtements et accessoires sont propres, en bon état et adaptés aux enfants de
                      0 à 12 ans.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-2 rounded-full mr-3 mt-1">
                    <span className="text-brand-peach font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Prenez des photos</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Si vous déposez en ligne, prenez des photos claires de chaque article sous plusieurs angles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-2 rounded-full mr-3 mt-1">
                    <span className="text-brand-peach font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Remplissez le formulaire de dépôt</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Indiquez les détails de chaque article : taille, marque, état, etc.
                    </p>
                    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                      <h4 className="font-medium mb-4">Informations sur l'article</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Catégorie
                          </label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                            <option value="">Sélectionner une catégorie</option>
                            <option value="vetements">Vêtements</option>
                            <option value="chaussures">Chaussures</option>
                            <option value="jouets">Jouets</option>
                            <option value="accessoires">Accessoires</option>
                            <option value="puericulture">Puériculture</option>
                            <option value="livres">Livres</option>
                          </select>
                        </div>
                        <div>
                          <BrandSelector
                            onBrandSelect={handleBrandSelect}
                            selectedBrand={selectedBrand}
                            childrenOnly={true}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Âge</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                            <option value="">Sélectionner une tranche d'âge</option>
                            <option value="0-1">0-1 an</option>
                            <option value="1-2">1-2 ans</option>
                            <option value="2-3">2-3 ans</option>
                            <option value="3-4">3-4 ans</option>
                            <option value="4-5">4-5 ans</option>
                            <option value="5-6">5-6 ans</option>
                            <option value="6-8">6-8 ans</option>
                            <option value="8-10">8-10 ans</option>
                            <option value="10-12">10-12 ans</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            État
                          </label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                            <option value="">Sélectionner l'état</option>
                            <option value="neuf">Neuf avec étiquette</option>
                            <option value="comme-neuf">Comme neuf</option>
                            <option value="bon">Bon état</option>
                            <option value="correct">État correct</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/20 p-2 rounded-full mr-3 mt-1">
                    <span className="text-brand-peach font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Envoyez ou déposez vos articles</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Vous pouvez envoyer vos articles par colis ou les déposer directement dans notre boutique.
                    </p>
                  </div>
                </li>
              </ol>
              <div className="mt-8 p-4 bg-brand-sage/10 dark:bg-brand-sage/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Une fois vos articles reçus, notre équipe les vérifiera et les mettra en vente dans les 48 heures.
                  Vous recevrez une notification par email à chaque étape du processus.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/login"
                className="px-6 py-3 bg-brand-peach text-white rounded-full font-medium hover:bg-brand-peach/90 transition-colors"
              >
                Commencer à vendre
              </Link>
            </div>
          </>
        )
      case "tarifs":
        return (
          <>
            <h1 className="text-3xl font-bold mb-6">Nos tarifs</h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 prose max-w-none dark:prose-invert">
              <p className="text-lg mb-6">
                Chez HnaKids, nous proposons des tarifs compétitifs pour la vente de vos articles :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-peach/10 dark:bg-brand-peach/20 rounded-full mr-4">
                      <FaPercent className="h-6 w-6 text-brand-peach" />
                    </div>
                    <h3 className="text-xl font-semibold">Commission</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous prélevons une commission de <span className="font-bold">30%</span> sur le prix de vente final.
                    Vous recevez donc <span className="font-bold">70%</span> du prix de vente.
                  </p>
                </div>

                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brand-sage/10 dark:bg-brand-sage/20 rounded-full mr-4">
                      <FaClipboardList className="h-6 w-6 text-brand-sage" />
                    </div>
                    <h3 className="text-xl font-semibold">Frais de mise en ligne</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Frais de mise en ligne : <span className="font-bold">1€</span> par article, déduit du montant final
                    lors de la vente.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900">
                <h3 className="text-xl font-semibold mb-4">Exemple de calcul</h3>
                <div className="space-y-2">
                  <p>
                    Prix de vente d'un article : <span className="font-bold">20€</span>
                  </p>
                  <p>
                    Commission (30%) : <span className="font-bold">6€</span>
                  </p>
                  <p>
                    Frais de mise en ligne : <span className="font-bold">1€</span>
                  </p>
                  <p className="text-lg font-bold text-brand-peach dark:text-brand-beige pt-2 border-t border-gray-200 dark:border-gray-700">
                    Vous recevez : 13€
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Services inclus</h3>
                <p className="mb-4">Nous nous occupons de tout pour maximiser vos chances de vente :</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCamera className="h-5 w-5 text-brand-peach mr-2 mt-1" />
                    <span>Photos professionnelles de vos articles</span>
                  </li>
                  <li className="flex items-start">
                    <FaClipboardList className="h-5 w-5 text-brand-peach mr-2 mt-1" />
                    <span>Descriptions détaillées et optimisées</span>
                  </li>
                  <li className="flex items-start">
                    <FaTruck className="h-5 w-5 text-brand-peach mr-2 mt-1" />
                    <span>Gestion des expéditions et emballage</span>
                  </li>
                  <li className="flex items-start">
                    <FaMoneyBillWave className="h-5 w-5 text-brand-peach mr-2 mt-1" />
                    <span>Paiement par virement bancaire dès la vente de vos articles</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                to="/vendre/depot"
                className="px-6 py-3 bg-brand-peach text-white rounded-full font-medium hover:bg-brand-peach/90 transition-colors"
              >
                Déposer des articles
              </Link>
            </div>
          </>
        )
      default:
        return (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center"
            >
              Comment ça marche
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-beige/20 dark:bg-brand-beige/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-beige">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Déposez</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Déposez vos vêtements et accessoires enfants en bon état.
                </p>
                <div className="mt-6 flex justify-center">
                  <FaTshirt className="h-12 w-12 text-brand-beige opacity-50" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-peach/20 dark:bg-brand-peach/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-peach">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Nous vendons</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Notre équipe s'occupe de tout : photos, description, mise en ligne.
                </p>
                <div className="mt-6 flex justify-center">
                  <FaCamera className="h-12 w-12 text-brand-peach opacity-50" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-brand-sage/20 dark:bg-brand-sage/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-sage">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">Vous gagnez</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Recevez jusqu'à 70% du prix de vente de vos articles.
                </p>
                <div className="mt-6 flex justify-center">
                  <FaMoneyBillWave className="h-12 w-12 text-brand-sage opacity-50" />
                </div>
              </motion.div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Pourquoi vendre avec HnaKids ?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-brand-beige/10 dark:bg-brand-beige/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Rentable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Gagnez de l'argent avec les vêtements que vos enfants ne portent plus
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-brand-peach/10 dark:bg-brand-peach/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Simple</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nous nous occupons de tout, de la mise en ligne à l'expédition
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-brand-sage/10 dark:bg-brand-sage/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Écologique</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Contribuez à l'économie circulaire et réduisez les déchets textiles
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-500 dark:text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">Espace libéré</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Désencombrez votre maison des vêtements trop petits
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Link
                to="/vendre/depot"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold mb-4">Comment déposer ?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  Découvrez comment préparer et déposer vos articles pour maximiser vos chances de vente.
                </p>
                <span className="px-4 py-2 bg-brand-beige/10 text-brand-beige rounded-full text-sm font-medium mt-auto">
                  En savoir plus
                </span>
              </Link>

              <Link
                to="/vendre/tarifs"
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 flex flex-col items-center"
              >
                <h3 className="text-xl font-semibold mb-4">Nos tarifs</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                  Consultez nos commissions et frais de service pour connaître vos gains potentiels.
                </p>
                <span className="px-4 py-2 bg-brand-peach/10 text-brand-peach rounded-full text-sm font-medium mt-auto">
                  Voir les tarifs
                </span>
              </Link>
            </div>

            <div className="bg-brand-sage/10 dark:bg-brand-sage/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Prêt à vendre ?</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Commencez dès maintenant à vendre les vêtements et accessoires que vos enfants ne portent plus et gagnez
                de l'argent tout en contribuant à une mode plus durable.
              </p>
              <Link
                to="/login"
                className="px-8 py-3 bg-brand-sage text-white rounded-full font-medium hover:bg-brand-sage/90 transition-colors inline-block"
              >
                Commencer à vendre
              </Link>
            </div>
          </>
        )
    }
  }

  return <div className="max-w-6xl mx-auto">{renderContent()}</div>
}

export default Vendre
