export const COLOR = {
  black: "#0a0a0a",
  white: "#ededed",
  brand: "#16B8F3",
  contrast: "#f35116",
};

export const COLOR_CONTEXT = {
  default: { backgroundColor: "#353337", color: "#6C686D" },
  info: { backgroundColor: "#284777", color: "#D6E3FF" },
  success: { backgroundColor: "#2C4E38", color: "#C5ECCE" },
  warning: { backgroundColor: "#534600", color: "#F8E287" },
  danger: { backgroundColor: "#93000A", color: "#FFDAD6" },
};

export type ColorContextType = keyof typeof COLOR_CONTEXT;