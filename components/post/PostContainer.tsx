import Head from "next/head";
import metadata from "../../data/metadata";
import Nav from "./../Nav";



const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className={`bg-white w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>

        <Nav />

      <main className={`w-full max-w-4xl flex justify-center`}>{props.children}</main>
    </div>
  );
};

export default Container;
