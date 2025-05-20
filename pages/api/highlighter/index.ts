import type { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";
import hljs from "highlight.js";
import createDOMPurify from "isomorphic-dompurify";
//
import { PostEntity, CreatePostDTO } from "@/store/src/posts/types";

type RequestType = CreatePostDTO;

type ResponseType = {
  data?: PostEntity;
  error?: unknown;
  meta?: unknown;
};

export default function highlighterHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  switch (req.method) {
    case "POST":
      try {
        // const { id, q } = req.query
        const { fileName, codeSnippet } = req.body as RequestType;
        const { value, language } = hljs.highlightAuto(codeSnippet);
         /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        const window = new JSDOM("").window as unknown as any;
        const DOMPurify = createDOMPurify(window);
        const sanitized = DOMPurify.sanitize(value);
        //
        return res.status(200).json({
          data: {
            file_name: fileName,
            code_raw: codeSnippet,
            code_safe: sanitized,
            code_lang: language ?? "plaintext",
          },
        });
      } catch (err) {
        return res.status(422).json({ error: (err as Error).message });
      }
    default:
      return res.status(405).json({ error: "Method not allowed" });
  }
}
