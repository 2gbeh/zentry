import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponseError } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import {
  WaitlistEntity,
  QueryWaitlistResponse,
  WaitlistRepository,
} from "@/store/src/waitlist";

type RequestType = undefined;
type ResponseType =
  | QueryWaitlistResponse["getCountAndTop3"]
  | BaseApiResponseError;

export default async function waitlistRpcGetCountAndTop3Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, count, error } =
        await new WaitlistRepository().getCountAndTop3();
      const safeCount = count ?? 0;
      const body = data ? { count: safeCount, data } : { error };
      return res.status(status).json(body);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
