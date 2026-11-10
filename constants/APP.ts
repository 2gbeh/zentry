export const APP_DOMAIN = "zentry.vercel.app"

export const APP = {
  name: "ZEntry DB",
  nameShort: "ZEntry",
  slug: "zentry",
  title: "Personal Organizer Super App",
  description: `Organize, Automate, and Analyze Your Records in One Place. Manage Journals, Credentials, Finances, and more.`,
  colors: {
    blue: "#0092dd",
    orange: "#dd4a00",
  },
  owner: "HWP Labs",
  creator: "Emmanuel Tugbeh",
  startData: "2026-11-08T00:00:00.000",
  launchData: "2026-11-08T00:00:00.000",
  domain: APP_DOMAIN,
  url: `https://${APP_DOMAIN}`,
} as const
