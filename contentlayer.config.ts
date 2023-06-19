import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';

const options = {
  theme: 'github-dark',
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options], highlight],
  },
});
