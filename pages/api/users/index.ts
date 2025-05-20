import type { NextApiRequest, NextApiResponse } from "next";
//
import { supabaseClient, SupabaseResponseType } from "@/lib/supabase";
import {
  UserEntity,
  UserService,
  UserRepository,
} from "@/store/src/users";

type RequestType = undefined;

type ResponseType = {
  data?: SupabaseResponseType<UserEntity[]>;
  error?: unknown;
  meta?: unknown;
};

export default async function usersHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  switch (req.method) {
    case "GET":
      try {
        const result = await new UserRepository().getAll();
        if (result?.data) {
          return res.status(200).json({ data: result });
        } else {
          throw new Error(result.error.message);
        }
      } catch (err) {
        return res.status(422).json({ error: (err as Error).message });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
