import { CommonPresenter } from "../common/presenter";
import { ProjectEntity } from "./interfaces";

type P = Partial<ProjectEntity>;

export class ProjectPresenter extends CommonPresenter {
  constructor(protected p?: P) {
    super(p);
  }
  // ATTRIBUTES
  get name() {
    return this?.p?.name;
  }
  // METHODS
  setProject(project: null | P | P[]) {
    if (project) this.p = Array.isArray(project) ? project[0] : project;
  }
}
