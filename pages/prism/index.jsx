import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../lib/get-posts';
import SectionWrapper from '../../components/SectionWrapper'; // ✅ only this extra import

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>PRISM | Blog</title>
      </Head>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <SectionWrapper>
          <h1 className="text-4xl font-bold text-primary mb-10 text-center">
            Inside PRISM
          </h1>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/prism/${post.slug}`}
                className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
