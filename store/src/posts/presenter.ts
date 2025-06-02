import { CommonPresenter } from "../common/presenter";
import { UserEntity } from "../users";
import { PostEntity } from "./interfaces";

type P = Partial<PostEntity>;

export class PostPresenter extends CommonPresenter {
  constructor(protected p?: P) {
    super(p);
  }
  // ATTRIBUTES
  get userId() {
    return this?.p?.user_id;
  }
  get organizationId() {
    return this?.p?.organization_id;
  }
  get projectId() {
    return this?.p?.project_id;
  }
  get imageUrl() {
    return this?.p?.image_url;
  }
  get title() {
    return this?.p?.title;
  }
  get status() {
    return this?.p?.status;
  }
  // METHODS
  setPost(post: null | P | P[]) {
    if (post) this.p = Array.isArray(post) ? post[0] : post;
  }
  getStatusText() {
    const status = this.status;
    return status ? ["Public", "Private"][status] : null;
  }
}
