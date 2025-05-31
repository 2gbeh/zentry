import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import {
  PostEntity,
  CreatePostDto,
  PostsRepository,
} from "@/store/src/posts";

type RequestType = CreatePostDto;
type ResponseType = BaseApiResponse<PostEntity[]>;

export default async function postsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
