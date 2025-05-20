import { CommonRepository } from "../common/repository";

export class UserRepository extends CommonRepository {
  constructor() {
    super("users");
  }
}
