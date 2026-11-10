export type PathType = string | ((id: unknown) => string)

export const PATH_PROTECTED = {
  dashboard: "/dashboard",
  interviews: "/interviews",
} as const satisfies Record<string, PathType>

export const PATH = {
  nil: "#",
  home: "/",
  login: "/",
  ...PATH_PROTECTED,
} as const satisfies Record<string, PathType>

