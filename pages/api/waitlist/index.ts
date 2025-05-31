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
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    case "POST": {
      const input = req.body as RequestType;
      const { status, data, error } = await new WaitlistRepository().create(
        input,
      );
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
