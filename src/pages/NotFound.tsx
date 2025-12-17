import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
