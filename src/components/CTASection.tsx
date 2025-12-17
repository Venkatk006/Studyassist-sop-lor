import { Link } from "react-router-dom"

type CTASectionProps = {
  title: string
  subtitle: string
  image: string
}

export default function CTASection({
  title,
  subtitle,
  image,
}: CTASectionProps) {
  return (
    <section className="relative py-16 mt-20 bg-blue-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-lg mb-8 opacity-90">
          {subtitle}
        </p>

        {/* ✅ SMALL CENTERED IMAGE */}
        <img
          src={image}
          alt="Study Abroad"
          loading="lazy"
          className="
            w-40
            md:w-52
            mx-auto
            h-auto
            rounded-xl
            shadow-lg
            mb-8
          "
        />

        <Link
          to="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
