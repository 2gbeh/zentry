import { supabaseClient as orm } from "@/lib/supabase";

type InputType = Record<string, unknown>;
type IdType = string;

export class CommonRepository {
  constructor(protected readonly table: string) {}

  async count() {
    return await orm
      .from(this.table)
      .select("id", { count: "exact", head: true })
      .is("deleted_at", null);
  }

  async getAll() {
    return await orm.from(this.table).select().is("deleted_at", null);
  }

  async getById(id: IdType) {
    return await orm
      .from(this.table)
      .select()
      .eq("id", id)
      .is("deleted_at", null)
      .single();
  }

  async create(data: InputType) {
    return await orm.from(this.table).insert([data]);
  }

  async upsert(data: InputType) {
    return await orm
      .from(this.table)
      .upsert({ ...data, updated_at: new Date().toISOString() }, { onConflict: "id", ignoreDuplicates: false })
      .select()
      .single();
  }

  async update(data: InputType, id: IdType) {
    return await orm
      .from(this.table)
      .update({ ...data, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
  }

  async trash(id: IdType) {
    return await orm
      .from(this.table)
      .update({ deleted_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
  }

  async restore(id: IdType) {
    return await orm
      .from(this.table)
      .update({ deleted_at: null })
      .eq("id", id)
      .select()
      .single();
  }

  async delete(id: IdType) {
    return await orm.from(this.table).delete().eq("id", id).select().single();
  }
}
