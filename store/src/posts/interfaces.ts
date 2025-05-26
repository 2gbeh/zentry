export interface PostEntity {
  file_name: string;
  code_raw: string;
  code_safe: string;
  code_lang: string;
}

export type CreatePostDto = {
  fileName: string;
  codeSnippet: string;
};
