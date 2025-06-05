import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// SHARED IMPORTS
import { waitlistApi } from "@/store/services/waitlistApi";
import { DeviceUtil } from "@/utils/device.util";
import { MOCK } from "@/constants/MOCK";
// LOCAL IMPORTS
import { formDataSchema, FormDataType, WaitlistPageUtil as _ } from "../utils/waitlist-page.util";

const M = MOCK.home;

export function useWaitlistPage() {
  const router = useRouter();
  // EXTERNAL STATES
  const { data: getCountAndTop3QueryData, ...getCountAndTop3QueryState } =
    waitlistApi.useGetCountAndTop3Query();
  const [createMutation] = waitlistApi.useCreateMutation();
  // LOCAL STATES
  const [submitting, setSubmitting] = useState(false);
  const [userAgent, setUserAgent] = useState("");
  // DERIVED STATES
  const form = useForm<FormDataType>({
    resolver: zodResolver(formDataSchema),
    defaultValues: M.formData ? _.mockDefaultValues : _.defaultValues,
  });
  // SIDE EFFECTS
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);
  // ACTIONS
  async function onSubmit(formData: FormDataType) {
    setSubmitting(true);
    try {
      const ipAddress = await DeviceUtil.fetchIpAddress();
      const geolocation = await DeviceUtil.fetchGeolocation();
      const body = _.prepareCreateMutationBody(
        formData,
        userAgent,
        ipAddress,
        geolocation,
      );
      createMutation(body)
        .unwrap()
        .then((data) => {
          form.reset();
          _.onSubmitSuccess(router);
        })
        .catch((err) => {
          _.onSubmitError(router, err);
        })
        .finally(() => {
          setSubmitting(false);
        });
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ DeviceUtil ~ err:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    getCountAndTop3QueryData,
    getCountAndTop3QueryState,
    submitting,
    form,
    onSubmit,
  };
}
