import type { NextApiRequest, NextApiResponse } from "next";
// SHARED IMPORTS
import { BaseApiResponse } from "@/store/types";
import { ApiRoutesUtil as _ } from "@/utils/api-routes.util";
// LOCAL IMPORTS
import { OrganizationEntity, OrganizationsRepository } from "@/store/src/organizations";

type RequestType = undefined;
type ResponseType = BaseApiResponse<OrganizationEntity[]>;

export default async function organizationsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  switch (req.method) {
    case "GET": {
      const { status, data, error } = await new OrganizationsRepository().getAll();
      const body = data ? { data } : { error };
      return res.status(status).json(body);
    }
    default:
      return res.status(405).json(_.METHOD_NOT_ALLOWED);
  }
}
