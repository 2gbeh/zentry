import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { CommonEntity } from "../common/interfaces";

export interface OrganizationEntity extends CommonEntity {
  name?: string;
}
