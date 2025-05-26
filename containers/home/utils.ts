import { z } from "zod";
import { QueryWaitlistResponse } from "@/store/src/waitlist/interfaces";
import {
  FetchGeolocationResponse,
  FetchIpAddressResponse,
} from "@/utils/device.util";

export const formDataSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type FormDataType = z.infer<typeof formDataSchema>;

export class HomePageUtil {
  static defaultValues: FormDataType = { email: "" };

  static mockDefaultValues: FormDataType = { email: "etugbeh@outlook.com" };

  static transformGetCountAndTop3QueryData = (
    data?: QueryWaitlistResponse["getCountAndTop3"],
  ) => (data && data?.data ? data.data.map(({ email }) => email) : []);

  static prepareCreateMutationBody = (
    formData: FormDataType,
    userAgent: string,
    ipAddress: FetchIpAddressResponse,
    geolocation: FetchGeolocationResponse,
  ) => ({
    email: formData.email,
    device: {
      userAgent,
      geolocation,
      ipv4: ipAddress.ipv4,
      ipv6: ipAddress.ipv6,
    },
  });
}
