// import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/image";
import RecentPosts from "../components/RecentPosts";
// import metadata from "../data/metadata";
import { Post,allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import PostList from "../components/post/PostList";
import CategoryList from "../components/CategoryList";
import { useState } from 'react';


const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [select, setSelect] = useState<string>('');

  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={25}
            layout={`responsive`}
            objectFit="cover"
          // className={`rounded-3xl`}
          />
          {/* <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-6xl text flex justify-center w-full drop-shadow-lg`}
          >
            {metadata.title}
          </span> */}
        </div>
        {/* <RecentPosts posts={posts} /> */}
        <CategoryList select={select} setSelect={setSelect} />
        {select === '' ? (
          <PostList posts={posts} />
        ) : (
          <PostList posts={(posts as Post[]).filter((post) => post.category === select)} />
        )}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
