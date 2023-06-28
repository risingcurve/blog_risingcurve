import type { NextPage } from "next";
import BlogPost from "../components/blog/BlogPost";
import Container from "../components/Container";
import { Post, allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import usDateString from "../lib/usDateString"
import Nav from "../components/Nav";
import { useState } from 'react';
import CategoryList from "../components/CategoryList";
import PostList from "../components/post/PostList";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [select, setSelect] = useState<string>('');

  return (
    <Container>
      <Nav/>
      <section className={`pb-10 bg-white `}>
        <h1 className={`text-3xl pt-10 mb-5 font-extrabold border-t`}>전체 포스팅</h1>
        <div className={`flex flex-col w-full`}>
          <CategoryList select={select} setSelect={setSelect} />
          {select === '' ? (
            <PostList posts={posts} />
          ) : (
            <PostList posts={(posts as Post[]).filter((post) => post.category === select)} />
          )}
        </div>
      </section>
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

export default Blog;
