import { Link } from "react-router-dom"

import HeroSection from "../components/HeroSection"
import CTASection from "../components/CTASection"

import ukHero from "../assets/backgrounds/uk-hero.webp"
import ctaBg from "../assets/backgrounds/uk-cta.webp"

const countries = [
  { name: "USA", path: "/countries/usa", flag: "🇺🇸" },
  { name: "UK", path: "/countries/uk", flag: "🇬🇧" },
  { name: "Canada", path: "/countries/canada", flag: "🇨🇦" },
  { name: "Australia", path: "/countries/australia", flag: "🇦🇺" },
  { name: "Germany", path: "/countries/germany", flag: "🇩🇪" },
]

const Countries = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection
        title="Study in the UK 🇬🇧"
        subtitle="Expert SOPs for Russell Group universities."
        image={ukHero}
      />

      {/* COUNTRIES GRID */}
      <div className="min-h-screen bg-gray-50 px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Study Abroad Destinations 🌍
        </h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link
              key={country.name}
              to={country.path}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4">{country.flag}</div>
              <h2 className="text-2xl font-semibold">{country.name}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <CTASection
        title="Apply to UK Universities with Confidence"
        subtitle="We specialize in UK-focused SOPs & visa statements."
        image={ctaBg}
      />
    </>
  )
}

export default Countries
