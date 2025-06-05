import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { PostEntity, CreatePostDto, PostsRepository } from "@/features/posts";

type RequestType = CreatePostDto;
type ResponseType = BaseApiResponse<PostEntity[]>;

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new PostsRepository().getAll();
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    case "POST": {
      const input = req.body as RequestType;
      const { status, data, error } = await new PostsRepository().create(input);
      const output = data ?? { error };
      return res.status(status).json(output);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
