import { supabaseClient as orm } from "@/lib/supabase/config";
import { CommonRepository } from "../common/repository";

export class WaitlistRepository extends CommonRepository {
  constructor() {
    super("waitlist");
  }

  async getCountAndTop3() {
    return await orm
      .from(this.table)
      .select("id, email", { count: 'exact' })
      .is("deleted_at", null)
      .order("created_at", { ascending: false })
      .limit(3);
  }
}
