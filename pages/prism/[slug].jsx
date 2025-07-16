import { getPostBySlug, getAllPosts } from '../../lib/blog';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
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
