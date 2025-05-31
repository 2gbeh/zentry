import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { CommonEntity } from "../common/interfaces";

export interface ProjectEntity extends CommonEntity {
  name?: string;
}
