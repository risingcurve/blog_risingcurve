import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

  
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    // params: {
    //   // Statically Generates /posts/a/b/c
    //   id: ['a', 'b', 'c'],
    // },

    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
    // params.id will be like ['a', 'b', 'c']
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}