import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Contact from "./pages/Contact"

// ✅ Correct country imports
import USA from "./pages/countries/USA"
import UK from "./pages/countries/UK"
import Canada from "./pages/countries/Canada"
import Australia from "./pages/countries/Australia"
import Germany from "./pages/countries/Germany"
import Countries from "./pages/Countries"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/countries/usa" element={<USA />} />
        <Route path="/countries/uk" element={<UK />} />
        <Route path="/countries/canada" element={<Canada />} />
        <Route path="/countries/australia" element={<Australia />} />
        <Route path="/countries/germany" element={<Germany />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
