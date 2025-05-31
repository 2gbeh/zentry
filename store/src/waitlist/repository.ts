import { supabaseClient as orm } from "@/lib/supabase/config";
import { CommonRepository } from "../common/repository";

export class WaitlistRepository extends CommonRepository {
  constructor() {
    super("waitlist");
  }

  async getTop3() {
    return await orm
      .from(this.table)
      .select("id, email")
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(3);
  }
}
