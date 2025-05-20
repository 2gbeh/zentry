import { useRouter } from "next/router";
// SHARD IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { DateUtil } from "@/utils/date.util";

export default function FilterPostsByDay() {
  const router = useRouter();
  const YEAR = Number(router.query?.year ?? -1);
  const MONTH = Number(router.query?.month ?? -1);
  const DAY = Number(router.query?.day ?? -1);
  const parsedYear = DateUtil.parseYear(YEAR);
  const parsedMonth = DateUtil.parseMonth(MONTH);
  const parsedDay = DateUtil.parseDay(DAY);
  console.log("🚀 ~ FilterPostsByDay:", parsedYear, parsedMonth, parsedDay);
  //  RENDER
  return parsedYear && parsedMonth && parsedDay ? (
    <main>
      <PageTitle title={`${parsedDay}/${parsedMonth}/${parsedYear}`} />
      <h1>
        {parsedYear}-{parsedMonth}-{parsedDay}
      </h1>
    </main>
  ) : (
    <main>
      <PageTitle title="Invalid Dynamic Segment" />
      <h1>
        {YEAR}/{MONTH}/{DAY}
      </h1>
    </main>
  );
}
