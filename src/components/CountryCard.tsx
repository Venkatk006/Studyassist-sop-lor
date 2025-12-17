import { Link } from "react-router-dom"

type CountryCardProps = {
  name: string
  description: string
  image: string
  link: string
}

export default function CountryCard({
  name,
  description,
  image,
  link,
}: CountryCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden group">
      
      {/* IMAGE */}
      <div className="flex justify-center pt-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            w-32 h-20 
            object-cover 
            rounded-lg 
            transition-transform duration-300 
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition"
        >
          View Details
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  )
}
