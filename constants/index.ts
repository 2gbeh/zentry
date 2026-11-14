export const NAIRA = "₦"
export const DOLLAR = "$"
//
export const ZERO = "0"
export const EMPTYSTR = ""
export const HYPHENS = "---"
export const NA = "N/A"
export const NONE = "None"
export const NOID = "Unidentified"
export const UNKNOWN = "Unknown"
//
export const CUR_YEAR = new Date().getFullYear() // 1970
export const CUR_DATE = new Date().toISOString().slice(0, 10) // 1970-01-01
export const CUR_TIME = new Date().toISOString().slice(11, 16) // 00:00
export const CUR_HOUR_UTC = new Date().getUTCHours() // 0 - 23
export const FILE_SIZE = 1024 * 1024 * 20 // 20MB
export const IMAGE_FILE_SIZE = 1024 * 1024 * 5 // 5MB
export const IMAGE_MIME_TYPE = ["image/jpeg", "image/png"]
