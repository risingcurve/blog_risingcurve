import { Post } from 'contentlayer/generated';
import BlogPost from '../blog/BlogPost';
import usDateString from '../../lib/usDateString';

interface RecentPostsProps {
  posts: Post[];
}

export default function PostList({ posts }: RecentPostsProps) {
  return (
    <div className="flex flex-col">
      {posts.map((post: Post) => (
        <BlogPost
          date={usDateString(post.date)}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
}
