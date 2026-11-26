import { OptionType } from "@/types"

export type TemplatesDataValueType = (typeof templatesData)[number]["value"];

export const templatesData = [
  {
    value: "lanyard",
    label: "Lanyard",
  },
  {
    value: "agogo",
    label: "Agogo",
  },
  {
    value: "power-grid",
    label: "Power Grid",
  },
  {
    value: "icons",
    label: "Icons",
  },
  //   { label: "", value: "" },
] as const satisfies readonly OptionType[];
