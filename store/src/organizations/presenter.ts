import { OrganizationEntity } from "./interfaces";

export class OrganizationPresenter {
  constructor(protected readonly row: OrganizationEntity) {}

  get _name() {
    return this.row.name; // startCase
  }

  get _createdAt() {
    return this.row.created_at; // Jan 1, 1970 12:00 AM
  }

  get _updatedAt() {
    return this.row.created_at; // Jan 1, 1970 12:00 AM
  }

  isUpdated() {
    return this.row?.updated_at ? true : false;
  }

  isDeleted() {
    return this.row?.deleted_at ? true : false;
  }
}
