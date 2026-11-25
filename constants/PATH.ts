export type PathType = string | ((id: unknown) => string)

export const PATH_PROTECTED = {
  dashboard: "/dashboard_",
  designs: "/designs",
  interviews: "/interviews",
  credentials: "/credentials",
} as const satisfies Record<string, PathType>

export const PATH = {
  nil: "#",
  home: "/",
  login: "/",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  ...PATH_PROTECTED,
} as const satisfies Record<string, PathType>

