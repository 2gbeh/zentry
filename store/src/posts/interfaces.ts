import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { CommonEntity } from "../common/interfaces";
import { UserEntity } from "../users/interfaces";
import { OrganizationEntity } from "../organizations/interfaces";
import { ProjectEntity } from "../projects/interfaces";

export interface PostEntity extends CommonEntity {
  title?: string;
  image_url?: string;
  status?: PostEntityStatus;
  user_id?: string;
  organization_id?: string | null;
  project_id?: string | null;
}

enum PostEntityStatus {
  PRIVATE,
  PUBLIC,
}

const postSchema = z.object({
  title: Z.description(),
  image_url: Z.imageFile(),
  status: Z.status({ max: 1 }).nullish(),
  user_id: Z.uuid(),
  organization_id: Z.uuid().nullish(),
  project_id: Z.uuid().nullish(),
});

export type CreatePostDto = z.infer<typeof postSchema>;

export type UpdatePostDto = Partial<CreatePostDto>;

export interface QueryPostDto {}

export interface QueryPostResponse {
  getTop5Today: Array<{
    id: string;
    title: string;
    created_at: string;
    updated_at: string | null;
    users: Partial<UserEntity>[];
    organizations: null | Partial<OrganizationEntity>[];
    projects: null | Partial<ProjectEntity>[];
  }>;
}
