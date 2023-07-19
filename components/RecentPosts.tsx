import Link from "next/link";
import usDateString from "../lib/usDateString"

const RecentPosts = ({ posts }) => {

  return (
    <section className={`pt-5 pb-10 bg-white `}>
    {/* <section className={`mt-10 pt-10 pl-5 pr-5 pb-10 bg-white border-2 rounded-xl border-gray-300`}> */}

      <div className={`flex flex-col`}>
        {posts.slice(0, 10).map((post) => (
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
    </section>
  );
};

export default RecentPosts;
