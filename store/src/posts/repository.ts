import { supabaseClient as orm } from "@/lib/supabase/config";
import { CommonRepository } from "../common/repository";
import { DateUtil } from "@/utils/date.util";

export class PostsRepository extends CommonRepository {
  constructor() {
    super("posts");
  }

  async getTop5Today() {
    const { today, tomorrow } = DateUtil.todayTomorrowISO();
    return await orm
      .from(this.table)
      .select(
        `
        id,
        title,
        created_at,
        updated_at,
        users:user_id (
          id,
          image_url,
          name,
          username
        ),
        organizations:organization_id (
          id,
          name
        ),
        projects:project_id (
          id,
          name
        )
       `,
      )
      .is("deleted_at", null)
      .eq("status", 1)
      .gte("created_at", today)
      .lt("created_at", tomorrow)
      .order("created_at", { ascending: false })
      .limit(5);
  }
}
