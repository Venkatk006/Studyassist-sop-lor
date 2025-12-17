import useSEO from "../../hooks/useSEO"
import CountryTimeline from "../../components/CountryTimeline"
import SEO from "../../components/SEO"

export default function USA() {
  useSEO({
    title: "USA SOP Writing Services | StudyAssist",
    description:
      "Expert SOP writing for MS, MBA & PhD admissions in the United States."
  })

  const steps = [
    {
      title: "Choose Program & University",
      description:
        "Shortlist US universities based on ranking, research fit, faculty profile, location, and budget. Programs like MS, MBA, and PhD require strong academic alignment."
    },
    {
      title: "Prepare SOP & LORs",
      description:
        "US universities focus heavily on a clear Statement of Purpose and strong Letters of Recommendation highlighting research, projects, leadership, and measurable impact."
    },
    {
      title: "Standardized Tests & Documents",
      description:
        "Prepare GRE/GMAT (if required), TOEFL/IELTS, resume, transcripts, and academic certificates as per university requirements."
    },
    {
      title: "Submit Applications",
      description:
        "Apply via university portals or Common App before deadlines. Early applications often improve admission and scholarship chances."
    },
    {
      title: "Visa & Interview Preparation",
      description:
        "Once admitted, prepare financial documents and attend the F-1 visa interview. Clear SOP alignment helps during visa questioning."
    },
    {
      title: "Post-Study Opportunities",
      description:
        "Graduates can apply for Optional Practical Training (OPT) and STEM OPT extensions, offering valuable US work experience."
    }
  ]

  return (
    <>
      <SEO
        title="Study in USA | SOP & LOR Writing Services"
        description="Expert SOP and LOR writing services for students planning to study in the USA. Increase your admission success."
        keywords="Study in USA, SOP for USA, LOR for USA"
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">
          Study in the United States 🇺🇸
        </h1>

        <p className="text-gray-600 mb-10">
          The United States is one of the most popular study-abroad destinations,
          offering world-class universities, cutting-edge research, and excellent
          post-study work opportunities.
        </p>

        <CountryTimeline steps={steps} />
      </div>
    </>
  )
}
