"use client"
import { motion } from "framer-motion"

const CGV = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Conditions Générales de Vente
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <p className="text-gray-600 dark:text-gray-300">
          Les présentes conditions générales de vente (CGV) établissent les conditions contractuelles applicables à tout
          achat effectué par un client sur le site internet HnaKids.
        </p>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 1 - Objet</h2>
          <p>
            Les présentes CGV régissent les relations contractuelles entre HnaKids et le client, les deux parties les
            acceptant sans réserve. Ces conditions générales de vente prévaudront sur toutes autres conditions figurant
            dans tout autre document, sauf dérogation préalable, expresse et écrite.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 2 - Prix</h2>
          <p>
            Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. Les
            frais de livraison sont indiqués avant validation de la commande. HnaKids se réserve le droit de modifier
            ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la
            validation de la commande.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 3 - Commande</h2>
          <p>
            Les informations contractuelles sont présentées en langue française et feront l'objet d'une confirmation
            reprenant ces informations contractuelles au plus tard au moment de la livraison. HnaKids se réserve le
            droit d'annuler ou de refuser toute commande d'un client avec lequel il existerait un litige relatif au
            paiement d'une commande antérieure.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 4 - Paiement</h2>
          <p>
            Le règlement des achats s'effectue par carte bancaire, virement bancaire ou tout autre moyen proposé lors du
            processus de commande. Le débit de la carte est effectué au moment de la validation de la commande. HnaKids
            se réserve le droit de suspendre toute gestion de commande et toute livraison en cas de refus d'autorisation
            de paiement de la part des organismes officiellement accrédités.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 5 - Livraison</h2>
          <p>
            Les produits sont livrés à l'adresse de livraison indiquée au cours du processus de commande. Les délais de
            livraison sont donnés à titre indicatif. Un retard de livraison par rapport aux délais indicatifs ne peut
            donner lieu à aucune pénalité ou indemnité, ni motiver l'annulation de la commande.
          </p>
          <p className="mt-4">
            En cas de colis endommagé lors de la livraison, le client doit impérativement refuser le colis et noter une
            réserve sur le bordereau de livraison. Le client doit également signaler cet incident dans les plus brefs
            délais au service client de HnaKids.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 6 - Droit de rétractation</h2>
          <p>
            Conformément aux dispositions légales en vigueur, le client dispose d'un délai de 14 jours à compter de la
            réception des produits pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de
            pénalités. Les frais de retour sont à la charge du client. Les produits doivent être retournés dans leur
            état d'origine et complets.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 7 - Politique de confidentialité</h2>
          <p>
            Les informations personnelles collectées par HnaKids lors de toute commande du client sont nécessaires au
            traitement de sa commande. Ces informations peuvent être transmises aux partenaires contractuels de HnaKids
            pour les besoins de l'exécution de la commande. Le traitement des informations communiquées par
            l'intermédiaire du site internet HnaKids a fait l'objet d'une déclaration auprès de la CNIL.
          </p>
          <p className="mt-4">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978, le client dispose d'un droit d'accès, de
            rectification et d'opposition aux données personnelles le concernant. Ce droit peut être exercé en écrivant
            à HnaKids à l'adresse indiquée sur le site.
          </p>
        </section>

        <section className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4">Article 8 - Droit applicable et litiges</h2>
          <p>
            Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux
            français seront seuls compétents. Le client est informé qu'il peut en tout état de cause recourir à une
            médiation conventionnelle, notamment auprès de la Commission de la médiation de la consommation ou auprès
            des instances de médiation sectorielles existantes, ou à tout mode alternatif de règlement des différends.
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-4">Date de dernière mise à jour : 1er janvier 2023</p>
      </div>
    </div>
  )
}

export default CGV
