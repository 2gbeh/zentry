import { supabaseClient as orm } from "@/lib/supabase";
//
import {
  OrganizationEntity,
  CreateOrganizationDto,
  UpdateOrganizationDto,
  QueryOrganizationDto,
} from "./interfaces";

export class OrganizationService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: OrganizationEntity[]) {}

  static prepareCreateMutationBody(formData: CreateOrganizationDto) {}

  static prepareUpdateMutationBody(formData: UpdateOrganizationDto) {}
}
