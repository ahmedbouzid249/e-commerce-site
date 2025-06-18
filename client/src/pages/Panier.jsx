import { Link } from "react-router-dom"

const Panier = () => {
  // Sample cart items - in a real app, this would come from state/context
  const cartItems = [
    { id: 1, name: "T-shirt enfant", price: 19.99, quantity: 2, image: "/placeholder.svg" },
    { id: 2, name: "Pantalon jean", price: 29.99, quantity: 1, image: "/placeholder.svg" },
    { id: 3, name: "Chaussures sport", price: 39.99, quantity: 1, image: "/placeholder.svg" },
  ]

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const subtotal = calculateSubtotal()
  const shipping = 4.99
  const total = subtotal + shipping

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Votre Panier</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="text-left p-4">Produit</th>
                    <th className="text-center p-4">Quantité</th>
                    <th className="text-right p-4">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <button className="text-sm text-red-600 hover:underline mt-1">Supprimer</button>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center items-center">
                          <button className="w-8 h-8 border rounded-l-md flex items-center justify-center">-</button>
                          <span className="w-10 h-8 border-t border-b flex items-center justify-center">
                            {item.quantity}
                          </span>
                          <button className="w-8 h-8 border rounded-r-md flex items-center justify-center">+</button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <p className="font-medium">{(item.price * item.quantity).toFixed(2)} DT</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link to="/boutique" className="text-gray-600 hover:underline flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continuer les achats
              </Link>
              <button className="text-red-600 hover:underline">Vider le panier</button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Résumé de la commande</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} DT</span>
                </div>
                <div className="flex justify-between">
                  <span>Frais de livraison</span>
                  <span>{shipping.toFixed(2)} DT</span>
                </div>
                <div className="border-t pt-3 mt-3 font-semibold flex justify-between">
                  <span>Total</span>
                  <span>{total.toFixed(2)} DT</span>
                </div>
              </div>

              <button className="w-full py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                Passer à la caisse
              </button>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Nous acceptons</h3>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-xl font-semibold mt-4">Votre panier est vide</h2>
          <p className="mt-2 text-gray-600">Découvrez nos produits et ajoutez-les à votre panier</p>
          <Link
            to="/boutique"
            className="mt-6 inline-block px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Voir la boutique
          </Link>
        </div>
      )}
    </div>
  )
}

export default Panier
