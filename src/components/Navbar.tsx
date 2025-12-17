import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // ✅ Click outside to close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudyAssist
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <Link to="/countries/usa" className="hover:text-blue-600">Countries</Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-16 right-4 w-64 bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 ease-out
        ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col space-y-4 font-medium">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About Us</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact Us</Link>

          {/* Countries */}
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500 mb-2">Countries</p>
            <Link onClick={() => setOpen(false)} to="/countries/usa">USA</Link>
            <Link onClick={() => setOpen(false)} to="/countries/uk">UK</Link>
            <Link onClick={() => setOpen(false)} to="/countries/canada">Canada</Link>
            <Link onClick={() => setOpen(false)} to="/countries/australia">Australia</Link>
            <Link onClick={() => setOpen(false)} to="/countries/germany">Germany</Link>
          </div>
        </nav>
      </div>
    </nav>
  )
}
