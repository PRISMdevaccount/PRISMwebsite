import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ReactMarkdown from 'react-markdown';

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  return { props: { post } };
};

export default function BlogPost({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} | PRISM</title>
      </Head>
      <Navbar />
      <main className="prose prose-lg max-w-4xl mx-auto p-6">
        <h1>{post.title}</h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </main>
    </>
  );
}
