// List of clothing brands (Tunisian and international)
export const clothingBrands = [
    // Tunisian Brands
    { id: 1, name: "Exist", origin: "tunisian", category: "clothing" },
    { id: 2, name: "Zen", origin: "tunisian", category: "clothing" },
    { id: 3, name: "Sasio", origin: "tunisian", category: "clothing" },
    { id: 4, name: "Aswak", origin: "tunisian", category: "clothing" },
    { id: 5, name: "Hamadi Abid", origin: "tunisian", category: "clothing" },
    { id: 6, name: "Samar", origin: "tunisian", category: "clothing" },
    { id: 7, name: "Maille Club", origin: "tunisian", category: "clothing" },

    // International Brands - General
    { id: 8, name: "Zara", origin: "international", category: "clothing" },
    { id: 9, name: "H&M", origin: "international", category: "clothing" },
    { id: 10, name: "Mango", origin: "international", category: "clothing" },
    { id: 11, name: "Bershka", origin: "international", category: "clothing" },
    { id: 12, name: "Pull & Bear", origin: "international", category: "clothing" },
    { id: 13, name: "Stradivarius", origin: "international", category: "clothing" },
    { id: 14, name: "LC Waikiki", origin: "international", category: "clothing" },
    { id: 15, name: "Defacto", origin: "international", category: "clothing" },

    // Children's Clothing Brands
    { id: 16, name: "Petit Bateau", origin: "international", category: "children" },
    { id: 17, name: "Jacadi", origin: "international", category: "children" },
    { id: 18, name: "Bonpoint", origin: "international", category: "children" },
    { id: 19, name: "Tartine et Chocolat", origin: "international", category: "children" },
    { id: 20, name: "Cyrillus", origin: "international", category: "children" },
    { id: 21, name: "IKKS", origin: "international", category: "children" },
    { id: 22, name: "Sergent Major", origin: "international", category: "children" },
    { id: 23, name: "Okaïdi", origin: "international", category: "children" },
    { id: 24, name: "Catimini", origin: "international", category: "children" },
    { id: 25, name: "Absorba", origin: "international", category: "children" },
    { id: 26, name: "Materna", origin: "international", category: "children" },
    { id: 27, name: "Orchestra", origin: "international", category: "children" },
    { id: 28, name: "Chicco", origin: "international", category: "children" },
    { id: 29, name: "Mothercare", origin: "international", category: "children" },
    { id: 30, name: "Carter's", origin: "international", category: "children" },

    // Sportswear Brands
    { id: 31, name: "Nike", origin: "international", category: "sportswear" },
    { id: 32, name: "Adidas", origin: "international", category: "sportswear" },
    { id: 33, name: "Puma", origin: "international", category: "sportswear" },
    { id: 34, name: "Reebok", origin: "international", category: "sportswear" },
    { id: 35, name: "Under Armour", origin: "international", category: "sportswear" },
    { id: 36, name: "Decathlon", origin: "international", category: "sportswear" },

    // Luxury Brands
    { id: 37, name: "Gucci", origin: "international", category: "luxury" },
    { id: 38, name: "Burberry", origin: "international", category: "luxury" },
    { id: 39, name: "Ralph Lauren", origin: "international", category: "luxury" },
    { id: 40, name: "Tommy Hilfiger", origin: "international", category: "luxury" },

    // Other
    { id: 41, name: "Autre", origin: "other", category: "other" },
]

// Function to get brands by category
export const getBrandsByCategory = (category) => {
    if (!category) return clothingBrands
    return clothingBrands.filter((brand) => brand.category === category)
}

// Function to get brands by origin
export const getBrandsByOrigin = (origin) => {
    if (!origin) return clothingBrands
    return clothingBrands.filter((brand) => brand.origin === origin)
}

// Function to get children's clothing brands
export const getChildrensBrands = () => {
    return clothingBrands.filter((brand) => brand.category === "children")
}
