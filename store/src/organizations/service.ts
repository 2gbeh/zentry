import {
  OrganizationEntity,
  CreateOrganizationDto,
  UpdateOrganizationDto,
  QueryOrganizationDto,
} from "./interfaces";

export class OrganizationsService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: OrganizationEntity[]) {}

  static prepareCreateMutationBody(formData: CreateOrganizationDto) {}

  static prepareUpdateMutationBody(formData: UpdateOrganizationDto) {}
}
