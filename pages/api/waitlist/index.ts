import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import {
  WaitlistEntity,
  CreateWaitlistDto,
  WaitlistRepository,
} from "@/store/src/waitlist";

type RequestType = CreateWaitlistDto;
type ResponseType = BaseApiResponse<WaitlistEntity[]>;

export default async function waitlistHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new WaitlistRepository().getAll();
      return res.status(status).json(data ? { data } : { error });
    }
    case "POST": {
      const body = req.body as RequestType;
      const { status, data, error } = await new WaitlistRepository().create(
        body,
      );
      return res.status(status).json(data ? { data } : { error });
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
