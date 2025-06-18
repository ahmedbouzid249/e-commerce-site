"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { clothingBrands } from "../../data/brands"

export const BrandFilter = ({ onBrandSelect, selectedBrand, showOriginFilter = true }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredBrands, setFilteredBrands] = useState(clothingBrands)
    const [originFilter, setOriginFilter] = useState("all") // "all", "tunisian", "international"
    const dropdownRef = useRef(null)

    // Filter brands based on search query and origin
    useEffect(() => {
        let filtered = clothingBrands

        // Filter by origin
        if (originFilter !== "all") {
            filtered = filtered.filter((brand) => brand.origin === originFilter)
        }

        // Filter by search query
        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter((brand) => brand.name.toLowerCase().includes(query))
        }

        setFilteredBrands(filtered)
    }, [searchQuery, originFilter])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    // Get the selected brand name
    const getSelectedBrandName = () => {
        if (!selectedBrand) return "Toutes les marques"
        const brand = clothingBrands.find((b) => b.id === selectedBrand)
        return brand ? brand.name : "Toutes les marques"
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            >
                <span>{getSelectedBrandName()}</span>
                <svg
                    className={`w-5 h-5 ml-2 -mr-1 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg dark:bg-gray-800 max-h-96 overflow-hidden"
                    >
                        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                            <input
                                type="text"
                                placeholder="Rechercher une marque..."
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {showOriginFilter && (
                            <div className="p-2 border-b border-gray-200 dark:border-gray-700 flex space-x-2">
                                <button
                                    className={`px-3 py-1 text-xs rounded-full ${originFilter === "all"
                                            ? "bg-brand-peach text-white"
                                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setOriginFilter("all")}
                                >
                                    Toutes
                                </button>
                                <button
                                    className={`px-3 py-1 text-xs rounded-full ${originFilter === "tunisian"
                                            ? "bg-brand-peach text-white"
                                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setOriginFilter("tunisian")}
                                >
                                    Tunisiennes
                                </button>
                                <button
                                    className={`px-3 py-1 text-xs rounded-full ${originFilter === "international"
                                            ? "bg-brand-peach text-white"
                                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setOriginFilter("international")}
                                >
                                    Internationales
                                </button>
                            </div>
                        )}

                        <div className="max-h-60 overflow-y-auto p-2">
                            <div className="grid grid-cols-1 gap-1">
                                <button
                                    className={`text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${!selectedBrand ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
                                        }`}
                                    onClick={() => {
                                        onBrandSelect(null)
                                        setIsOpen(false)
                                    }}
                                >
                                    Toutes les marques
                                </button>
                                {filteredBrands.map((brand) => (
                                    <button
                                        key={brand.id}
                                        className={`text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedBrand === brand.id ? "bg-gray-100 dark:bg-gray-700 font-medium" : ""
                                            }`}
                                        onClick={() => {
                                            onBrandSelect(brand.id)
                                            setIsOpen(false)
                                        }}
                                    >
                                        {brand.name}
                                        {brand.origin === "tunisian" && (
                                            <span className="ml-2 text-xs text-brand-peach dark:text-brand-beige">(Tunisienne)</span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {filteredBrands.length === 0 && (
                                <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                                    Aucune marque trouvée pour "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
