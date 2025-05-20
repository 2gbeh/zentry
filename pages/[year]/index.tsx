import { useRouter } from "next/router";
// SHARD IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { DateUtil } from "@/utils/date.util";

export default function FilterPostsByYear() {
  const router = useRouter();
  const YEAR = Number(router.query?.year ?? -1);
  const parsedYear = DateUtil.parseYear(YEAR);
  console.log("🚀 ~ FilterPostsByYear:", parsedYear);
  //  RENDER
  return parsedYear ? (
    <main>
      <PageTitle title={parsedYear} />
      <h1>{parsedYear}</h1>
    </main>
  ) : (
    <main>
      <PageTitle title="Invalid Dynamic Segment" />
      <h1>{YEAR}</h1>
    </main>
  );
}
