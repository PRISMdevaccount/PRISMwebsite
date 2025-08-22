import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BlogSlider from '../components/BlogSlider';
import Story from '../components/Story';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper'; // ✅ added
import { getAllPosts } from '../lib/blog';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>PRISM | Surgical AI Assistant</title>
      </Head>
      <Navbar />

      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <BlogSlider posts={posts} />
      </SectionWrapper>

      <SectionWrapper>
        <Story />
      </SectionWrapper>

      <Footer /> {/* keep footer outside wrapper */}
    </>
  );
}
