import { Link } from "react-router-dom"
import { FileText, Star, Award } from "lucide-react"

const plans = [
  {
    name: "Basic SOP",
    price: "₹3,999",
    icon: FileText,
    features: [
      "1 SOP Draft",
      "University-specific structure",
      "1 Revision",
      "Delivery in 3–4 days"
    ]
  },
  {
    name: "Premium SOP",
    price: "₹6,999",
    icon: Star,
    popular: true,
    features: [
      "2 SOP Drafts",
      "Unlimited revisions",
      "Country-specific customization",
      "Resume review included",
      "Delivery in 48 hours"
    ]
  },
  {
    name: "SOP + LOR Bundle",
    price: "₹9,999",
    icon: Award,
    features: [
      "1 SOP + 2 LORs",
      "Referee guidance",
      "Unlimited revisions",
      "Priority support",
      "Fast delivery"
    ]
  }
]

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">
        Pricing Plans
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Transparent pricing for SOP & LOR writing services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const Icon = plan.icon
          return (
            <div
              key={index}
              className={`border rounded-xl p-8 shadow-sm bg-white relative ${
                plan.popular ? "border-blue-600 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <Icon className="text-blue-600 mb-4" size={32} />

              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 text-gray-600 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="block text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Choose Plan
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
