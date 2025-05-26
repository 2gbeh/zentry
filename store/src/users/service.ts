import { supabaseClient as orm } from "@/lib/supabase";
//
import {
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  QueryUserDto,
} from "./interfaces";

export class UserService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: UserEntity[]) {}

  static prepareCreateMutationBody(formData: CreateUserDto) {}

  static prepareUpdateMutationBody(formData: UpdateUserDto) {}
}
