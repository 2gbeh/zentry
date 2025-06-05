import { NextRouter } from "next/router";
import { z } from "zod";
import { toast } from "sonner";
// SHARED IMPORTS
import { FetchGeolocationResponse } from "@/utils/device.util";
import { PATH } from "@/constants/PATH";

export const formDataSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type FormDataType = z.infer<typeof formDataSchema>;

export class WaitlistPageUtil {
  static defaultValues: FormDataType = { email: "" };

  static mockDefaultValues: FormDataType = { email: "etugbeh@outlook.com" };

  static prepareCreateMutationBody = (
    formData: FormDataType,
    userAgent: string,
    ipAddress: undefined | string,
    geolocation: FetchGeolocationResponse,
  ) => ({
    email: formData.email,
    device: {
      userAgent,
      ipAddress,
      geolocation,
    },
  });

  static onSubmitSuccess = (router: NextRouter) => {
    toast.success("Email added to waitlist", {
      onDismiss: () => router.replace(PATH.home),
      onAutoClose: () => router.replace(PATH.home),
    });
  };

  static onSubmitError = (router: NextRouter, err: unknown) => {
    const err_ = err as { status: number };
    if (err_?.status === 409) {
      toast("Email already added to waitlist", {
        closeButton: true,
        action: {
          label: "Continue",
          onClick: () => router.replace(PATH.home),
        },
        onDismiss: () => router.replace(PATH.home),
        onAutoClose: () => router.replace(PATH.home),
      });
    } else {
      console.log("🚀 ~ onSubmit ~ createMutation ~ err:", err);
    }
  };
}
