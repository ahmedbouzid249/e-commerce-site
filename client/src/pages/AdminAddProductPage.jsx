"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrandSelector } from "../components/ui/brand-selector";

const AdminAddProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    age: "",
    condition: "",
    brand: null,
    color: "",
    material: "",
    inStock: true,
  });
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBrandSelect = (brandId) => {
    setProductData((prev) => ({
      ...prev,
      brand: brandId,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your API
    console.log("Product data:", productData);
    console.log(
      "Images:",
      selectedImages.map((img) => img.file)
    );

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Produit ajouté avec succès!");
      // Reset form
      setProductData({
        name: "",
        description: "",
        price: "",
        category: "",
        age: "",
        condition: "",
        brand: null,
        color: "",
        material: "",
        inStock: true,
      });
      setSelectedImages([]);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Ajouter un produit
      </motion.h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block mb-1 font-medium">
                Nom du produit
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="description" className="block mb-1 font-medium">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={productData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              ></textarea>
            </div>

            <div>
              <label htmlFor="price" className="block mb-1 font-medium">
                Prix (€)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block mb-1 font-medium">
                Catégorie
              </label>
              <select
                id="category"
                name="category"
                value={productData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              >
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
              <label htmlFor="age" className="block mb-1 font-medium">
                Âge
              </label>
              <select
                id="age"
                name="age"
                value={productData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              >
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
              <label htmlFor="condition" className="block mb-1 font-medium">
                État
              </label>
              <select
                id="condition"
                name="condition"
                value={productData.condition}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
                required
              >
                <option value="">Sélectionner l'état</option>
                <option value="neuf">Neuf avec étiquette</option>
                <option value="comme-neuf">Comme neuf</option>
                <option value="bon">Bon état</option>
                <option value="correct">État correct</option>
              </select>
            </div>

            <div>
              <BrandSelector
                onBrandSelect={handleBrandSelect}
                selectedBrand={productData.brand}
                childrenOnly={true}
                label="Marque"
              />
            </div>

            <div>
              <label htmlFor="color" className="block mb-1 font-medium">
                Couleur
              </label>
              <input
                type="text"
                id="color"
                name="color"
                value={productData.color}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <div>
              <label htmlFor="material" className="block mb-1 font-medium">
                Matière
              </label>
              <input
                type="text"
                id="material"
                name="material"
                value={productData.material}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={productData.inStock}
                onChange={handleChange}
                className="h-4 w-4 text-brand-peach focus:ring-brand-peach dark:focus:ring-brand-beige"
              />
              <label htmlFor="inStock" className="ml-2 block text-sm">
                En stock
              </label>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4">Images du produit</h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Ajouter des images
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-peach dark:focus:ring-brand-beige dark:bg-gray-800 dark:border-gray-600"
              />
              <p className="text-sm text-gray-500 mt-1">
                Vous pouvez ajouter jusqu'à 5 images.
              </p>
            </div>

            {selectedImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.preview || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-brand-peach text-white rounded-md hover:bg-brand-peach/90 transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] mr-2"></span>
                  Ajout en cours...
                </>
              ) : (
                "Ajouter le produit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddProductPage;
