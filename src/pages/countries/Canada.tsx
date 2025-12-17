import useSEO from "../../hooks/useSEO"
import CountryTimeline from "../../components/CountryTimeline"
import SEO from "../../components/SEO"

export default function Canada() {
  useSEO({
    title: "Canada SOP Writing Services | StudyAssist",
    description:
      "Expert SOP writing for MS, MBA & PhD admissions in Canada."
  })

  const steps = [
    {
      title: "Choose Program & Institution",
      description:
        "Select Canadian universities or colleges based on research scope, co-op options, and PR pathways."
    },
    {
      title: "Write SOP / Study Plan",
      description:
        "Canadian SOPs emphasize academic consistency, career clarity, and strong home-country ties."
    },
    {
      title: "Language Test & Documents",
      description:
        "Prepare IELTS/TOEFL, resume, transcripts, and work experience letters if applicable."
    },
    {
      title: "Apply to Universities",
      description:
        "Apply directly to institutions and secure a Letter of Acceptance (LOA)."
    },
    {
      title: "Study Permit Application",
      description:
        "Apply for a Canadian Study Permit with financial proof and a visa-focused SOP."
    },
    {
      title: "Post-Graduation Work Permit",
      description:
        "PGWP allows students to work in Canada for up to 3 years, supporting PR pathways."
    }
  ]

  return (
    <>
      <SEO
        title="Study in Canada | SOP & LOR Writing Services"
        description="Professional SOP and study plan writing services for students planning to study in Canada. Improve your admission and visa success."
        keywords="Study in Canada, SOP for Canada, Study Plan Canada"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Study in Canada 🇨🇦
        </h1>

        <p className="text-gray-600 mb-10">
          Canada is known for high-quality education, affordable tuition,
          and excellent permanent residency opportunities.
        </p>

        <CountryTimeline steps={steps} />
      </div>
    </>
  )
}
