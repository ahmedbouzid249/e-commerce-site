import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./App.css"

// Add this to debug image loading issues
const originalConsoleError = console.error
console.error = (...args) => {
  if (args[0] && typeof args[0] === "string" && args[0].includes("Failed to load resource")) {
    console.log("Resource loading error:", args)
  }
  originalConsoleError.apply(console, args)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
