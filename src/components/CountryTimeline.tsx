import {
  GraduationCap,
  FileText,
  ClipboardCheck,
  Send,
  CreditCard,
  Briefcase
} from "lucide-react"

type TimelineStep = {
  title: string
  description: string
}

type CountryTimelineProps = {
  steps: TimelineStep[]
}

const icons = [
  GraduationCap,
  FileText,
  ClipboardCheck,
  Send,
  CreditCard,
  Briefcase
]

export default function CountryTimeline({ steps }: CountryTimelineProps) {
  return (
    <div className="relative border-l-4 border-blue-600 pl-8 space-y-12 mt-10">
      {steps.map((step, index) => {
        const Icon = icons[index] || FileText

        return (
          <div key={index} className="relative">
            {/* Icon */}
            <div className="absolute -left-[46px] top-0 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow">
              <Icon size={20} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-1">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
