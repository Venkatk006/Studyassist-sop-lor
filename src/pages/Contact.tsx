import { useState } from "react"

const Contact = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    try {
      const response = await fetch("https://formspree.io/f/xanrkydz", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      })

      if (response.ok) {
        setStatus("SUCCESS")
        form.reset()
      } else {
        setStatus("ERROR")
      }
    } catch {
      setStatus("ERROR")
    }
  }

  return (
    <div className="bg-gray-50 px-6 py-16">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us 📩
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {status === "SUCCESS" && (
          <p className="text-green-600 text-center mt-4">
            Message sent successfully! ✅
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-red-600 text-center mt-4">
            Failed to send message. Please try again ❌
          </p>
        )}
      </div>
    </div>
  )
}

export default Contact
