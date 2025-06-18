"use client"
import { motion } from "framer-motion"

const FAQ = () => {
  const faqs = [
    {
      question: "Comment fonctionne le processus de vente ?",
      answer:
        "Vous déposez vos articles, nous les évaluons, prenons des photos professionnelles et les mettons en vente. Une fois vendus, vous recevez jusqu'à 70% du prix de vente.",
    },
    {
      question: "Quels types d'articles acceptez-vous ?",
      answer:
        "Nous acceptons les vêtements, jouets et accessoires pour enfants de 0 à 12 ans, en bon état, propres et à la mode.",
    },
    {
      question: "Quel est le délai de livraison ?",
      answer:
        "Les commandes sont généralement expédiées sous 24-48h. Le délai de livraison dépend ensuite du mode d'expédition choisi (généralement 2-5 jours ouvrables).",
    },
    {
      question: "Comment retourner un article ?",
      answer:
        "Vous disposez de 14 jours pour retourner un article. Contactez-nous par email pour initier le processus de retour.",
    },
    {
      question: "Comment sont fixés les prix de vente ?",
      answer:
        "Les prix sont fixés en fonction de l'état de l'article, de sa marque, de son âge et des prix du marché actuel.",
    },
    {
      question: "Puis-je modifier mon adresse de livraison après avoir passé ma commande ?",
      answer:
        "Si votre commande n'a pas encore été expédiée, vous pouvez nous contacter rapidement par téléphone ou email pour modifier l'adresse de livraison. Une fois la commande expédiée, il n'est plus possible de modifier l'adresse.",
    },
    {
      question: "Comment créer un compte ?",
      answer:
        "Vous pouvez créer un compte en cliquant sur 'Connexion' en haut à droite de notre site, puis sur 'Créer un compte'. Vous devrez fournir votre nom, votre adresse e-mail et créer un mot de passe.",
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer:
        "Nous acceptons les paiements par carte bancaire, virement bancaire et paiement à la livraison (pour certaines régions).",
    },
    {
      question: "Comment puis-je suivre ma commande ?",
      answer:
        "Une fois votre commande expédiée, vous recevrez un email contenant un numéro de suivi. Vous pourrez utiliser ce numéro sur notre site ou sur le site du transporteur pour suivre votre colis.",
    },
    {
      question: "Proposez-vous des réductions pour les achats en gros ?",
      answer:
        "Oui, nous proposons des tarifs spéciaux pour les achats en grande quantité. Veuillez nous contacter directement pour discuter de vos besoins et obtenir un devis personnalisé.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Foire Aux Questions
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Vous trouverez ci-dessous les réponses aux questions les plus fréquemment posées. Si vous ne trouvez pas la
          réponse à votre question, n'hésitez pas à nous contacter directement.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Vous avez d'autres questions ? N'hésitez pas à nous contacter.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors"
        >
          Contactez-nous
        </a>
      </div>
    </div>
  )
}

export default FAQ
