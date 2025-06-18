"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// Update the handleSubmit function to handle connection errors gracefully
const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const toggleForm = () => {
    setIsLogin(!isLogin)
    setError("")
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register"
      const data = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password }

      // For development purposes, check if the backend is available
      // In a production app, you would remove this mock logic
      // const backendAvailable = false // Set to true when your backend is ready

      // if (!backendAvailable) {
      //   // Mock authentication for development
      //   console.log("Using mock authentication (backend not connected)")
      //   localStorage.setItem("token", "mock-token-for-development")
      //   setTimeout(() => {
      //     setLoading(false)
      //     navigate("/")
      //   }, 1000)
      //   return
      // }

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Authentication failed")
      }

      const responseData = await response.json()
      localStorage.setItem("token", responseData.token)
      setLoading(false)
      navigate("/")
    } catch (err) {
      console.error("Authentication error:", err)
      setError(
        err.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again later."
          : err.message || "Authentication failed",
      )
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{isLogin ? "Connexion" : "Créer un compte"}</h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex border-b mb-6">
          <button
            className={`pb-2 px-4 ${isLogin ? "border-b-2 border-gray-800 font-medium" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Connexion
          </button>
          <button
            className={`pb-2 px-4 ${!isLogin ? "border-b-2 border-gray-800 font-medium" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Inscription
          </button>
        </div>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Votre nom"
                  required={!isLogin}
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Votre email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Votre mot de passe"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block mb-1 font-medium">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Confirmez votre mot de passe"
                required={!isLogin}
              />
            </div>
          )}

          {isLogin && (
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Se souvenir de moi</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {isLogin ? "Connexion..." : "Création..."}
              </span>
            ) : isLogin ? (
              "Se connecter"
            ) : (
              "Créer un compte"
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p>
            {isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}{" "}
            <button onClick={toggleForm} className="text-gray-800 dark:text-gray-300 font-medium hover:underline">
              {isLogin ? "S'inscrire" : "Se connecter"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
