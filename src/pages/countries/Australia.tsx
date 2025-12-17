import useSEO from "../../hooks/useSEO"
import CountryTimeline from "../../components/CountryTimeline"
import SEO from "../../components/SEO"

export default function Australia() {
  useSEO({
    title: "Australia SOP Writing Services | StudyAssist",
    description:
      "Professional SOP writing for MS, MBA & PhD admissions in Australia."
  })

  const steps = [
    {
      title: "Select Course & University",
      description:
        "Choose Australian universities based on QS rankings, industry exposure, and internship opportunities."
    },
    {
      title: "Prepare SOP & GTE Statement",
      description:
        "Australian applications require a clear SOP aligned with the Genuine Temporary Entrant (GTE) criteria."
    },
    {
      title: "English Test & Documents",
      description:
        "Prepare IELTS/PTE, academic records, resume, and employment documents if required."
    },
    {
      title: "Apply to Universities",
      description:
        "Submit applications and receive an Offer Letter and Confirmation of Enrolment (CoE)."
    },
    {
      title: "Student Visa (Subclass 500)",
      description:
        "Apply for an Australian student visa with strong financial and SOP justification."
    },
    {
      title: "Post-Study Work Rights",
      description:
        "Graduates are eligible for Temporary Graduate Visa (Subclass 485) for work experience."
    }
  ]

  return (
    <>
      <SEO
        title="Study in Australia | SOP & LOR Writing Services"
        description="Professional SOP, GTE statement, and LOR writing services for students planning to study in Australia. Boost your admission and visa success."
        keywords="Study in Australia, SOP for Australia, GTE Statement Australia"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Study in Australia 🇦🇺
        </h1>

        <p className="text-gray-600 mb-10">
          Australia offers globally ranked universities, flexible education,
          and strong post-study employment options.
        </p>

        <CountryTimeline steps={steps} />
      </div>
    </>
  )
}
