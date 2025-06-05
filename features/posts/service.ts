export class PostsService {
  static formatOrgProject(org?: null | string, project?: null | string) {
    if (org && project) {
      return `${org} &bull; ${project}`;
    }
    return org ?? project;
  }
}
