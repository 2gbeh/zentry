import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { UserEntity, UsersRepository } from "@/store/src/users";

type RequestType = undefined;
type ResponseType = BaseApiResponse<UserEntity[]>;

export default async function usersHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new UsersRepository().getAll();
      const body = data ? { data } : { error };
      return res.status(status).json(body);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
