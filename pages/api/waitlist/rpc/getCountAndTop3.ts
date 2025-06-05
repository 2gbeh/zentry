import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { QueryWaitlistResponse, WaitlistRepository } from "@/features/waitlist";

type RequestType = undefined;
type ResponseType = BaseApiResponse<QueryWaitlistResponse["getCountAndTop3"]>;

export default async function waitlistRpcGetCountAndTop3Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, count, error } =
        await new WaitlistRepository().getCountAndTop3();
      const output = data ? { data, count } : { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
