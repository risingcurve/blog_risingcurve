import PostContainer from "../../components/post/PostContainer"
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import usDateString from "../../lib/usDateString";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <PostContainer customMeta={customMeta}>
      <div className="mt-10 prose">
        <div className="mb-3">{usDateString(post.date)}</div>
        <div className="text-3xl font-extrabold mb-3">{post.title}</div>
        <div>{post.category} | {post.description}</div>
        <hr/>
        <MDXComponent />
      </div>
    </PostContainer>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;