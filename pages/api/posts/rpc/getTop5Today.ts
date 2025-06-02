import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { QueryPostResponse, PostsRepository } from "@/store/src/posts";

type RequestType = undefined;
type ResponseType = BaseApiResponse<QueryPostResponse["getTop5Today"]>;

export default async function postsRpcGetTop5TodayHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } =
        await new PostsRepository().getTop5Today();
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
