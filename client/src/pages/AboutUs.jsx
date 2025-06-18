"use client"
import { motion } from "framer-motion"
import { Spotlight } from "../components/ui/spotlight"
import { Sparkles } from "../components/ui/sparkles"
import { Lens } from "../components/ui/lens"
import { useState } from "react"

// Import team member images
import founderImage from "../assets/images/founder.jpg"
import equipeImg from "../assets/images/equipe.jpg"
import hamdiImg from "../assets/images/hamdi.jpg"
import zainebImg from "../assets/images/zaineb.jpg"
// Add the import for the about.jpg image
import aboutImg from "../assets/images/about.jpg"

const AboutUs = () => {
  const [hovering, setHovering] = useState(false)

  // Team members data
  const teamMembers = [
    {
      name: "Fattouma Sana",
      role: "Fondatrice & CEO",
      bio: "Passionnée par la mode durable et mère de deux enfants, Fattouma a fondé HnaKids pour offrir une solution économique et écologique aux parents.",
      image: founderImage,
    },
    {
      name: "Hamdi Ben Jarrar",
      role: "Directeur des Opérations",
      bio: "Expert en logistique avec 10 ans d'expérience, Hamdi assure que chaque vêtement soit traité avec soin et livré rapidement.",
      image: hamdiImg,
    },
    {
      name: "Zaineb Hechich",
      role: "Responsable Marketing",
      bio: "Créative et dynamique, Zaineb développe des stratégies innovantes pour faire connaître HnaKids à travers le pays.",
      image: zainebImg,
    },
  ]

  // Company values
  const values = [
    {
      title: "Durabilité",
      description:
        "Nous prolongeons la vie des vêtements pour réduire l'impact environnemental de l'industrie textile.",
      icon: (
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
      ),
    },
    {
      title: "Qualité",
      description: "Chaque article est soigneusement vérifié pour garantir qu'il répond à nos standards élevés.",
      icon: (
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
      ),
    },
    {
      title: "Communauté",
      description: "Nous créons une communauté de parents qui partagent les mêmes valeurs d'économie et d'écologie.",
      icon: (
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Accessibilité",
      description: "Nous rendons les vêtements de qualité accessibles à tous les budgets.",
      icon: (
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden flex flex-col items-center justify-center rounded-lg mb-16">
        {/* Background image */}
        <img
          src={aboutImg || "/placeholder.svg"}
          alt="HnaKids background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

        {/* Spotlight effect */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <Spotlight fill="rgba(247, 175, 125, 0.3)" />
        </div>

        {/* Content */}
        <div className="p-4 relative z-10 w-full text-center" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <Sparkles color="#F7AF7D">Notre Histoire</Sparkles>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Découvrez comment HnaKids est né et ce qui nous motive chaque jour
          </motion.p>
        </div>
      </div>

      {/* Our Story Section - Updated with Lens component */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>

          <div className="flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="md:w-3/5">
              <div className="prose max-w-none dark:prose-invert">
                <p>
                  HnaKids est né en 2020 d'une idée simple : offrir une solution durable et économique pour les parents
                  qui cherchent à habiller leurs enfants sans se ruiner, tout en réduisant l'impact environnemental.
                </p>
                <p>
                  Notre fondatrice, Sarah Ben Ammar, mère de deux enfants, a constaté à quel point les vêtements
                  d'enfants étaient peu portés avant d'être trop petits. Elle a alors imaginé une plateforme qui
                  permettrait aux parents de vendre facilement les vêtements que leurs enfants ne portent plus, et à
                  d'autres parents d'acheter ces vêtements à prix réduits.
                </p>
                <p>
                  Depuis, HnaKids s'est développé pour devenir la référence en matière de seconde main pour enfants en
                  Tunisie, avec une communauté grandissante de parents partageant les mêmes valeurs d'économie
                  circulaire et de consommation responsable.
                </p>
              </div>
            </div>

            <div className="md:w-2/5">
              <Lens zoomFactor={1.3} lensSize={150}>
                <img
                  src={equipeImg || "/placeholder.svg"}
                  alt="L'équipe HnaKids"
                  className="w-full h-auto max-h-[300px] object-cover rounded-lg"
                />
              </Lens>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Nos valeurs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Notre équipe
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-peach dark:text-brand-beige mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Clients satisfaits" },
              { number: "20,000+", label: "Articles vendus" },
              { number: "95%", label: "Taux de satisfaction" },
              { number: "3", label: "Boutiques en Tunisie" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-brand-peach dark:text-brand-beige mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Rejoignez notre communauté
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Que vous souhaitiez vendre ou acheter, HnaKids est là pour vous accompagner dans votre démarche
            éco-responsable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/boutique"
              className="px-8 py-3 bg-brand-peach text-white rounded-full font-medium hover:bg-brand-peach/90 transition-colors"
            >
              Découvrir la boutique
            </a>
            <a
              href="/vendre"
              className="px-8 py-3 bg-transparent border border-brand-beige text-gray-800 dark:text-white rounded-full font-medium hover:bg-brand-beige/10 transition-colors"
            >
              Comment vendre
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
