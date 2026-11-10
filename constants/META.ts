import { APP } from "./APP"

export const META = {
  metadataBase: new URL(APP.url),
  title: {
    default: `${APP.name} - ${APP.title}`,
    template: `%s - ${APP.name}`,
  },
  description: APP.description,
  applicationName: APP.name,
  openGraph: {
    type: "website",
    siteName: APP.name,
    locale: "en_CA",
    images: [{ url: "/social-preview.png", alt: "" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/social-preview.png"],
  },
}
