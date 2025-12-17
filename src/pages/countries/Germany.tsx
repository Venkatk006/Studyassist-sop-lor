import useSEO from "../../hooks/useSEO"
import CountryTimeline from "../../components/CountryTimeline"
import SEO from "../../components/SEO"

export default function Germany() {
  useSEO({
    title: "Germany SOP Writing Services | StudyAssist",
    description:
      "Expert SOP writing for MS & PhD admissions in Germany."
  })

  const steps = [
    {
      title: "Choose Program & University",
      description:
        "Select German public or private universities based on curriculum, research labs, and language of instruction."
    },
    {
      title: "Prepare SOP & Motivation Letter",
      description:
        "German SOPs are factual, structured, and research-oriented with strong academic justification."
    },
    {
      title: "Language & Academic Documents",
      description:
        "Prepare IELTS/TOEFL or German language certificates, transcripts, and APS (if required)."
    },
    {
      title: "Apply via Uni-Assist / Direct",
      description:
        "Submit applications through Uni-Assist or directly to universities."
    },
    {
      title: "Student Visa & Blocked Account",
      description:
        "Open a blocked account and apply for a German student visa."
    },
    {
      title: "Post-Study Opportunities",
      description:
        "Graduates can stay up to 18 months to find employment and transition to EU Blue Card."
    }
  ]

  return (
    <>
      <SEO
        title="Study in Germany | SOP & LOR Writing Services"
        description="Professional SOP and motivation letter writing services for students planning to study in Germany. Improve your admission success."
        keywords="Study in Germany, SOP for Germany, Motivation Letter Germany"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Study in Germany 🇩🇪
        </h1>

        <p className="text-gray-600 mb-10">
          Germany is known for tuition-free public universities, strong research,
          and excellent career opportunities in Europe.
        </p>

        <CountryTimeline steps={steps} />
      </div>
    </>
  )
}
