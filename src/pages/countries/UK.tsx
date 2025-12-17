import useSEO from "../../hooks/useSEO"
import CountryTimeline from "../../components/CountryTimeline"
import SEO from "../../components/SEO"

export default function UK() {
  useSEO({
    title: "UK SOP Writing Services | StudyAssist",
    description:
      "Professional SOP writing for MS, MBA & PhD admissions in the United Kingdom."
  })

  const steps = [
    {
      title: "Select Course & University",
      description:
        "Choose UK universities based on course structure, duration (1-year masters), rankings, and career outcomes."
    },
    {
      title: "Prepare SOP & Academic LORs",
      description:
        "UK SOPs focus on academic motivation, subject knowledge, career goals, and course relevance rather than storytelling."
    },
    {
      title: "English Test & Documents",
      description:
        "Prepare IELTS/PTE, academic transcripts, CV, and relevant certificates as per university guidelines."
    },
    {
      title: "Apply via UCAS / University Portals",
      description:
        "Submit applications before deadlines. Early applications increase chances for scholarships."
    },
    {
      title: "CAS & Student Visa",
      description:
        "Receive Confirmation of Acceptance for Studies (CAS) and apply for a UK Student Visa."
    },
    {
      title: "Post-Study Work",
      description:
        "Graduate Route Visa allows international students to work in the UK for up to 2 years after graduation."
    }
  ]

  return (
    <>
      <SEO
        title="Study in UK | SOP & LOR Writing Services"
        description="Expert SOP and LOR writing services for students planning to study in the United Kingdom. Increase your admission success."
        keywords="Study in UK, SOP for UK, LOR for UK"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Study in the United Kingdom 🇬🇧
        </h1>

        <p className="text-gray-600 mb-10">
          The UK offers globally recognized degrees, shorter course durations,
          and strong post-study work opportunities.
        </p>

        <CountryTimeline steps={steps} />
      </div>
    </>
  )
}
