import { Link } from "react-router-dom"
import {
  GraduationCap,
  FileText,
  Globe,
  CheckCircle
} from "lucide-react"

import HeroSection from "../components/HeroSection"
import CTASection from "../components/CTASection"
import CountryCard from "../components/CountryCard"
import useSEO from "../hooks/useSEO"

import heroBg from "../assets/backgrounds/home-hero.webp"
import ctaBg from "../assets/backgrounds/home-cta.webp"

import usaImg from "../assets/countries/usa.webp"
import ukImg from "../assets/countries/uk.webp"
import canadaImg from "../assets/countries/canada.webp"
import australiaImg from "../assets/countries/australia.webp"
import germanyImg from "../assets/countries/germany.webp"

/* =======================
   TYPES
======================= */
type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  text: string
}

/* =======================
   HOME PAGE
======================= */
export default function Home() {

  useSEO({
    title: "StudyAssist | SOP & LOR Writing Services",
    description:
      "Professional SOP & LOR writing services for USA, UK, Canada, Australia and Germany admissions."
  })

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <HeroSection
        title="Study Abroad SOP & LOR Experts"
        subtitle="Visa-ready SOPs crafted for top global universities"
        image={heroBg}
      />

      {/* ================= HERO BUTTONS ================= */}
      <div className="flex gap-4 justify-center -mt-16 relative z-10">
        <Link
          to="/countries"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          View Countries
        </Link>

        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition"
        >
          Get Started
        </Link>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose StudyAssist?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<GraduationCap size={28} />}
            title="Expert Guidance"
            text="Country-specific SOP strategies aligned with university expectations."
          />

          <FeatureCard
            icon={<FileText size={28} />}
            title="Strong SOPs"
            text="Clear, structured, plagiarism-free Statements of Purpose."
          />

          <FeatureCard
            icon={<Globe size={28} />}
            title="Top Destinations"
            text="UK, Canada, Australia, Germany & USA admissions support."
          />

          <FeatureCard
            icon={<CheckCircle size={28} />}
            title="High Success Rate"
            text="Proven results with admits from globally ranked universities."
          />
        </div>
      </section>

      {/* ================= COUNTRIES SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">
          Study Destinations We Support
        </h2>

        <p className="text-gray-600 text-center mb-12">
          Country-specific SOP & LOR strategies tailored for top universities
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CountryCard
            name="United States"
            description="SOPs crafted for competitive MS, MBA & PhD programs."
            image={usaImg}
            link="/countries/usa"
          />

          <CountryCard
            name="United Kingdom"
            description="Concise, impactful SOPs aligned with UK university expectations."
            image={ukImg}
            link="/countries/uk"
          />

          <CountryCard
            name="Canada"
            description="PR-focused SOPs for universities and colleges."
            image={canadaImg}
            link="/countries/canada"
          />

          <CountryCard
            name="Australia"
            description="Career-focused SOPs with visa compliance language."
            image={australiaImg}
            link="/countries/australia"
          />

          <CountryCard
            name="Germany"
            description="Research-driven SOPs for public universities."
            image={germanyImg}
            link="/countries/germany"
          />
        </div>
      </section>

      {/* ================= IMAGE CTA SECTION ================= */}
      <CTASection
        title="Ready to Study Abroad?"
        subtitle="Let our experts craft a winning SOP & LOR for you."
        image={ctaBg}
      />

      {/* ================= FINAL CTA ================= */}
      <section className="bg-white border-t">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Your Study Abroad Journey Today
          </h3>

          <p className="text-gray-600 mb-8">
            Get personalized guidance from experts who understand global admissions.
          </p>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  )
}

/* =======================
   FEATURE CARD
======================= */
function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="flex justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
