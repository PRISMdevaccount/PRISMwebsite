import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>PRISM | Surgical AI Assistant</title>
      </Head>
      <Navbar />
      <Hero />
      {/* We'll add the BlogSlider, Story, and Contact sections next */}
    </>
  );
}
