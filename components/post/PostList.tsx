import { Post } from 'contentlayer/generated';
import BlogPost from '../blog/BlogPost';
import usDateString from '../../lib/usDateString';
import Link from 'next/link';

interface RecentPostsProps {
  posts: Post[];
}

export default function PostList({ posts }: RecentPostsProps) {
  return (
    <div className="flex flex-col mt-5">
      {/* {posts.map((post: Post) => (
        <BlogPost
          date={usDateString(post.date)}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))} */}
      {posts.map((post) => (
      <Link
        key={post._id}
        href={`/blog/${post._raw.flattenedPath}`}
        passHref
      >
        <a className="mt-5 mb-5">
          <div className={`font-bold text-xs text-gray-500`}>{usDateString(post.date)}</div>
          <div className={`font-extrabold text-xl mt-2 mb-2`}>{post.title}</div>
          <div className={`font-bold text-sm text-gray-500 pb-10 border-b`}>{post.category} | {post.description}</div>
        </a>
      </Link>
              ))}
    </div>
  );
}
