import {
  UserEntity,
  CreateUserDto,
  UpdateUserDto,
  QueryUserDto,
} from "./interfaces";

export class UsersService {
  static validateSchema(obj: unknown) {}

  static transformGetQueryData(data: UserEntity[]) {}

  static prepareCreateMutationBody(formData: CreateUserDto) {}

  static prepareUpdateMutationBody(formData: UpdateUserDto) {}
}
