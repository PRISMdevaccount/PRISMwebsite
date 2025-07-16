import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BlogSlider from '@/components/BlogSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>PRISM | Surgical AI Assistant</title>
      </Head>
      <Navbar />
      <Hero />
      <BlogSlider />
    </>
  );
}
