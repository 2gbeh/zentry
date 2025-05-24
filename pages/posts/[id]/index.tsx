import { useRouter } from "next/router";
// SHARD IMPORTS
import { PageTitle } from "@/components/atoms/page-title";

export default function PostDetailsPage() {
  const router = useRouter();
  const ID = router.query?.id as string; // 682a5e8b-0e88-8009-9124-a4784100dfcc
  console.log("🚀 ~ PostDetails:", ID);
  //  RENDER
  return (
    <main>
      <PageTitle title={ID} />
      <h1>{ID}</h1>
    </main>
  );
}
