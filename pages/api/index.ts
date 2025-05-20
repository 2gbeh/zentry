import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  docs: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  res
    .status(200)
    .json({ docs: "https://nextjs.org/docs/api-routes/introduction" });
}
