// pages/prism/[slug].jsx
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { getAllPosts, getPostBySlug } from "../../lib/get-posts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import SectionWrapper from "../../components/SectionWrapper";

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, data } = getPostBySlug(slug);
  const mdxSource = await serialize(content);
  return { props: { frontmatter: data, mdxSource } };
}

export default function PostPage({ frontmatter, mdxSource }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title} | PRISM</title>
      </Head>
      <Navbar />

      {/* Hero banner */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-lg opacity-90">{frontmatter.date}</p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <SectionWrapper>
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 prose prose-lg prose-indigo max-w-none transition-transform hover:scale-[1.01]">
            <MDXRemote {...mdxSource} />
          </div>
        </SectionWrapper>

        {/* Callout box */}
        <SectionWrapper>
          <div className="bg-gradient-to-r from-purple-100 to-green-100 border-l-4 border-purple-400 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ✨ Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              PRISM was built to make pancreatic surgery safer and smarter.
              Every story, every design choice, and every innovation has been
              guided by that mission.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
