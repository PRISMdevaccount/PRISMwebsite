import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../lib/get-posts';
import SectionWrapper from '../../components/SectionWrapper';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>PRISM | Inside PRISM</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-green-50 px-6 py-16">
        <SectionWrapper>
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
            Inside <span className="text-purple-600">PRISM</span>
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our journey, research insights, and the story behind PRISM — advancing surgical intelligence for a better tomorrow.
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/prism/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}
