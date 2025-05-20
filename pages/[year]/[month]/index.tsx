import { useRouter } from "next/router";
// SHARD IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { DateUtil } from "@/utils/date.util";

export default function FilterPostsByMonth() {
  const router = useRouter();
  const YEAR = Number(router.query?.year ?? -1);
  const MONTH = Number(router.query?.month ?? -1);
  const parsedYear = DateUtil.parseYear(YEAR);
  const parsedMonth = DateUtil.parseMonth(MONTH);
  console.log("🚀 ~ FilterPostsByMonth:", parsedYear, parsedMonth);
  //  RENDER
  return parsedYear && parsedMonth ? (
    <main>
      <PageTitle title={`${parsedMonth}/${parsedYear}`} />
      <h1>
        {parsedYear}-{parsedMonth}
      </h1>
    </main>
  ) : (
    <main>
      <PageTitle title="Invalid Dynamic Segment" />
      <h1>
        {YEAR}/{MONTH}
      </h1>
    </main>
  );
}
