import Link from "next/link";
import usDateString from "../lib/usDateString"

const RecentPosts = ({ posts }) => {
  

  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post._raw.flattenedPath}`}
            passHref
          >
            <a className="mt-10">
              <div className={`font-bold text-xs text-gray-500 mb-2`}>{usDateString(post.date)}</div>
              <div className={`font-bold text-xl`}>{post.title}</div>
              <div className={`font-bold text-sm text-gray-500 mt-2`}>{post.category} | {post.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
