import { useEffect } from "react"

type SEOProps = {
  title: string
  description?: string
}

export default function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let meta = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement | null

      if (!meta) {
        meta = document.createElement("meta")
        meta.name = "description"
        document.head.appendChild(meta)
      }

      meta.content = description
    }
  }, [title, description])
}
