// import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/image";
import RecentPosts from "../components/RecentPosts";
import metadata from "../data/metadata";
import { Post,allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import PostList from "../components/post/PostList";
import CategoryList from "../components/CategoryList";
import { useState } from 'react';
import Nav from "../components/Nav";


const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [select, setSelect] = useState<string>('');

  return (
    <div className="bg-white w-full flex flex-col items-center">
      <Nav />
      <div className={`w-full`}>
        <div className={`relative`}>
          <div className="mainImage">
            <Image
              src={`/home.jpg`}
              alt="대표 이미지"
              width={`100%`}
              height={20}
              layout={`responsive`}
              objectFit="cover"
              className={`brightness-50 static`}
              
            />
            <span
              className={`absolute top-24 left-44 font-light text-white text-3xl flex justify-center drop-shadow-lg`}
            >
              매일은 아니지만 꾸준하게
              {/* {metadata.description} */}
            </span>
            <span
              className={`absolute top-36 left-44 font-extrabold text-white text-3xl flex justify-center drop-shadow-lg`}
            >
              잡식성 개발자의 기술 블로그
            </span>
          </div>
        </div>
      </div>
      <Container>
        <div className={`my-5 w-full`}>
          <div className={`relative`}>
            {/* <Image
              src={`/home.jpg`}
              alt="대표 이미지"
              width={`100%`}
              height={25}
              layout={`responsive`}
              objectFit="cover"
            // className={`rounded-3xl`}
            /> */}
            {/* <span
            className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-6xl text flex justify-center w-full drop-shadow-lg`}
            >
            {metadata.title}
          </span> */}
          </div>
          {/* <RecentPosts posts={posts} /> */}
          <h1 className={`text-3xl mt-10 mb-5 pb-5 font-extrabold`}>최근 포스팅</h1>
          <CategoryList select={select} setSelect={setSelect} />
          {select === '' ? (
            <RecentPosts posts={posts} />
          ) : (
            <RecentPosts posts={(posts as Post[]).filter((post) => post.category === select)} />
          )}
        </div>
      </Container>
    </div>
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
