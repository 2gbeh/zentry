export { z } from "zod";
import { z } from "zod";

/**
z.string().nullish();
// Accepts: "hello", null, undefined ✅ More flexible 

z.string().nullable(); 
// Accepts: "hello", null ❌ Not undefined
*/

export class ZodHelper {
  static uuid() {
    return z.string().uuid();
  }

  static text(options?: { min?: number; max?: number }) {
    const { min = 2, max = 50 } = options ?? {};
    return z.string().min(min).max(max);
  }

  static description(options?: { min?: number; max?: number }) {
    const { min = 3, max = 160 } = options ?? {};
    return z.string().min(min).max(max);
  }

  static status(options?: { min?: number; max?: number }) {
    const { min = 0, max = 9 } = options ?? {};
    return z.number().int().min(min).max(max);
  }

  static birthName(options?: { message?: string }) {
    const { message = "Invalid email address" } = options ?? {};
    return z
      .string()
      .trim() // removes outer whitespace, rejects only‑spaces
      .min(2, "First name cannot be empty")
      .max(50, "First name can’t exceed 50 characters")
      .regex(/^[A-Za-z][A-Za-z' -]*$/, {
        message:
          "First name may contain letters, apostrophes, spaces, or hyphens and must start with a letter",
      });
  }

  static username(options?: { message?: string }) {
    const { message = "Invalid email address" } = options ?? {};
    return z
      .string()
      .min(1, "Username must be at least 3 characters long")
      .max(25, "Username can’t exceed 20 characters")
      .regex(/^[a-zA-Z][a-zA-Z0-9_-]*$/, {
        message:
          "Username must start with a letter and contain only letters, numbers, underscores, or hyphens",
      })
      .refine((val) => !/[_-]{2,}/.test(val), {
        message:
          "Username can’t contain consecutive separators (like '__' or '--')",
      });
  }

  static email(options?: { message?: string }) {
    const { message = "Invalid email address" } = options ?? {};
    return z.string().email({ message });
  }

  static tel(options?: { message?: string }) {
    const { message = "Invalid telephone number" } = options ?? {};
    return z
      .string()
      .min(10, { message: "Phone number is too short" })
      .max(15, { message: "Phone number is too long" })
      .regex(/^\+?[0-9]+$/, { message });
  }

  static strongPassword() {
    return z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, { message: "Password must include a lowercase letter" })
      .regex(/[A-Z]/, { message: "Password must include an uppercase letter" })
      .regex(/[0-9]/, { message: "Password must include a number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must include a special character",
      });
  }

  static money(options?: { message?: string }) {
    const { message = "Invalid entry" } = options ?? {};
    return z.preprocess(
      (val) =>
        typeof val === "string" && val.trim() !== "" ? parseFloat(val) : 0,
      z.number().nonnegative(message),
    );
  }

  static select<T extends readonly { value: string; label: string }[]>(
    data: T,
  ) {
    const values = data.map((it) => it.value) as [
      T[number]["value"],
      ...T[number]["value"][],
    ];
    return z.enum(values);
  }

  static pastDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().max(new Date(), { message });
  }

  static futureDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().min(new Date(), { message });
  }

  static imageUrl() {
    return z
      .string()
      .url()
      .refine((url) => /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url));
  }

  static imageFile(options?: { size?: number }) {
    const { size = 5 } = options ?? {};
    return z
      .instanceof(File)
      .refine((file) => file.size > 0, {
        message: "File is required",
      })
      .refine((file) => file.size <= size * 1024 * 1024, {
        message: "Invalid file size",
      })
      .refine((file) => file.type.startsWith("image/"), {
        message: "Invalid file type",
      });
  }

  static reactNativeFile(options?: { size?: number }) {
    const { size = 5 } = options ?? {};
    return z.object({
      uri: z.string().url(),
      type: z.string(),
      name: z.string(),
      size: z.number().max(size * 1024 * 1024),
    });
  }

  static device() {
    const ipv4Regex =
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
    const ipv6Regex =
      /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(::)|(([0-9a-fA-F]{1,4}:){1,6}:)|(([0-9a-fA-F]{1,4}:){1,5}:[0-9a-fA-F]{1,4})|(([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,2})|(([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,3})|(([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,4})|([0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,5}))|(:((:[0-9a-fA-F]{1,4}){1,6})))(%[0-9a-zA-Z]{1,})?$/;

    return z.object({
      userAgent: z.string().max(512, "User‑Agent too long").optional(),
      ipAddress: z.union([
        z.string().regex(ipv4Regex, "Invalid IPv4 address").optional(),
        z.string().regex(ipv6Regex, "Invalid IPv6 address").optional(),
      ]),
      geolocation: z
        .object({
          long: z.number().min(-180).max(180),
          lat: z.number().min(-90).max(90),
          accuracy: z.number().nonnegative(),
        })
        .partial({ accuracy: true }) // accuracy required by default; remove if optional
        .optional(),
    });
  }
}
