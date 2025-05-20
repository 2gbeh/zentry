import type { NextApiRequest, NextApiResponse } from "next";

type RequestType = {
  month: number;
  year: number;
};

type ResponseType = {
  data?: unknown;
  error?: unknown;
};

export default async function adminRpcGetDashboardSummaryHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  switch (req.method) {
    case "POST":
      try {
        const { month, year } = req.body as RequestType;
        // TODO: business logic here
        return res.status(200).json({ data: { month, year } });
      } catch (err) {
        return res.status(422).json({ error: (err as Error).message });
      }
    default:
      return res.status(405).json({ error: "METHOD NOT ALLOWED" });
  }
}
