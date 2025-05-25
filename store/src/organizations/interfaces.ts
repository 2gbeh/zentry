import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { SortType } from "@/types/query-params.types";
import { CommonEntity } from "../common";
import { UserEntity } from "../users";

export interface OrganizationEntity extends CommonEntity {
  user_id?: null | string;
  user?: UserEntity;
  image_url?: null | string;
  name?: string;
}

export const organizationSchema = z.object({
  user_id: Z.uuid(),
  image_url: Z.imageUrl().nullish(),
  name: Z.birthName(),
});

export type CreateOrganizationDTO = z.infer<typeof organizationSchema>;

export type UpdateOrganizationDTO = Partial<CreateOrganizationDTO>;

export type QueryOrganizationDTO = {
  search?: string;
  sort?: {
    name?: SortType;
  };
  paginate?: {
    page: number;
    limit: number;
  };
};
