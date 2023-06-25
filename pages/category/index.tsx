import { Post, allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import PostList from '../../components/post/PostList';
import { useState } from 'react';
import CategoryList from '../../components/CategoryList';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

export default function Category({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [select, setSelect] = useState<string>('');

  return (
    <>
      <Head>
        <meta property="og:title" content="Maintain Hoon Category Page" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Maintain Hoon의 카테고리 페이지 입니다." />
        <meta property="og:url" content="https://maintainhoon.vercel.app" />
        <meta property="og:image" content="https://maintainhoon.vercel.app/images/metaLogo.png" />
      </Head>
      <section className="mt-12 mb-8 flex flex-col gap-12">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">🗂 Category</h1>
        <CategoryList select={select} setSelect={setSelect} />
      </section>
      {select === '' ? (
        <PostList posts={posts} />
      ) : (
        <PostList posts={(posts as Post[]).filter((post) => post.category === select)} />
      )}
    </>
  );
}
