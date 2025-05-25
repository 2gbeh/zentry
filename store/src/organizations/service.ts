import { supabaseClient as orm } from "@/lib/supabase";
//
import {
  OrganizationEntity,
  CreateOrganizationDTO,
  UpdateOrganizationDTO,
  QueryOrganizationDTO,
} from "./interfaces";

export class OrganizationService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: OrganizationEntity[]) {}

  static prepareCreateMutationBody(formData: CreateOrganizationDTO) {}

  static prepareUpdateMutationBody(formData: UpdateOrganizationDTO) {}
}
