export type PathType = string | ((id: unknown) => string)

export const PATH_PROTECTED = {
  dashboard: "/dashboard",
  interviews: "/interviews",
  credentials: "/credentials",
} as const satisfies Record<string, PathType>

export const PATH = {
  nil: "#",
  home: "/",
  login: "/",
  forgotPassword: "/forgot-password",
  secrets: "/secrets",
  ...PATH_PROTECTED,
} as const satisfies Record<string, PathType>

