import { CommonPresenter } from "../common/presenter";
import { OrganizationEntity } from "./interfaces";

type P = Partial<OrganizationEntity>;

export class OrganizationPresenter extends CommonPresenter {
  constructor(protected p?: P) {
    super(p);
  }
  // ATTRIBUTES
  get name() {
    return this?.p?.name;
  }
  // METHODS
  setOrganization(organization: null | P | P[]) {
    if (organization)
      this.p = Array.isArray(organization) ? organization[0] : organization;
  }
}
