import { useEffect, useState } from "react";
import { postsApi } from "@/store/services/postsApi";
import data from "./data.json";

export function useNotificationsWidget() {
  // EXTERNAL STATES
  const { data } = postsApi.useGetTop5TodayQuery();
  // LOCAL STATES
  const [mounted, setMounted] = useState(false);
  // DERIVED STATES
  const hasData = data && data?.length > 0;
  // SIDE EFFECTS
  useEffect(() => {
    setMounted(true);
  }, []);

  return {mounted, data, hasData};
}
