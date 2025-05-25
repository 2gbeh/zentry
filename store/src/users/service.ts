import { supabaseClient as orm } from "@/lib/supabase";
//
import {
  UserEntity,
  CreateUserDTO,
  UpdateUserDTO,
  QueryUserDTO,
} from "./interfaces";

export class UserService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: UserEntity[]) {}

  static prepareCreateMutationBody(formData: CreateUserDTO) {}

  static prepareUpdateMutationBody(formData: UpdateUserDTO) {}
}
