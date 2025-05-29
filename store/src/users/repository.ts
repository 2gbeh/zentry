import { CommonRepository } from "../common/repository";

export class UsersRepository extends CommonRepository {
  constructor() {
    super("users");
  }
}
