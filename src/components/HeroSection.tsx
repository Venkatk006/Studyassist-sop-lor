import React from "react"

type HeroSectionProps = {
  title: string
  subtitle: string
  image: string
  children?: React.ReactNode
}

export default function HeroSection({
  title,
  subtitle,
  image,
  children
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[55vh] md:h-[60vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          {title}
        </h1>

        <p className="text-base md:text-lg mb-6 opacity-90">
          {subtitle}
        </p>

        {children}
      </div>
    </section>
  )
}
