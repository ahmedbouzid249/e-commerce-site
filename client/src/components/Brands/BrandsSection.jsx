"use client"
import { InfiniteMovingCards } from "../ui/infinite-moving-cards"

const BrandsSection = () => {
  const brands = [
    {
      name: "Petit Bateau",
      logo: "/placeholder.svg?height=60&width=120&text=Petit+Bateau",
    },
    {
      name: "Jacadi",
      logo: "/placeholder.svg?height=60&width=120&text=Jacadi",
    },
    {
      name: "Bonpoint",
      logo: "/placeholder.svg?height=60&width=120&text=Bonpoint",
    },
    {
      name: "Tartine et Chocolat",
      logo: "/placeholder.svg?height=60&width=120&text=Tartine+et+Chocolat",
    },
    {
      name: "Cyrillus",
      logo: "/placeholder.svg?height=60&width=120&text=Cyrillus",
    },
    {
      name: "IKKS",
      logo: "/placeholder.svg?height=60&width=120&text=IKKS",
    },
    {
      name: "Sergent Major",
      logo: "/placeholder.svg?height=60&width=120&text=Sergent+Major",
    },
    {
      name: "Okaïdi",
      logo: "/placeholder.svg?height=60&width=120&text=Okaïdi",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nos marques partenaires</h2>

        <InfiniteMovingCards
          items={brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-h-12" />
            </div>
          ))}
          direction="left"
          speed="slow"
          className="py-4"
        />
      </div>
    </section>
  )
}

export default BrandsSection
