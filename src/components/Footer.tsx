export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-white">StudyAssist</h3>
          <p className="text-sm mt-2">
            Expert SOP & LOR writing services for top global universities.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>Countries</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@studyassist.com</p>
        </div>
      </div>

      <p className="text-center text-xs mt-6 text-gray-500">
        © {new Date().getFullYear()} StudyAssist. All rights reserved.
      </p>
    </footer>
  )
}