import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponseError } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import {
  QueryWaitlistResponse,
  WaitlistRepository,
} from "@/store/src/waitlist";

type RequestType = undefined;
type ResponseType = QueryWaitlistResponse["getTop3"] | BaseApiResponseError;

export default async function waitlistRpcGetTop3Handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new WaitlistRepository().getTop3();
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
