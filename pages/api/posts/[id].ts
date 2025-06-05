import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { PostEntity, UpdatePostDto, PostsRepository } from "@/features/posts";

type RequestType = UpdatePostDto;
type ResponseType = BaseApiResponse<PostEntity>;

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const id = req.query.id as string;

  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new PostsRepository().getById(id);
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    case "PATCH": {
      const input = req.body as RequestType;
      const { status, data, error } = await new PostsRepository().update(
        input,
        id,
      );
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    case "DELETE": {
      const { status, data, error } = await new PostsRepository().trash(id);
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
