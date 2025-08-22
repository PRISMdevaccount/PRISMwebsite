import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function BlogSlider({ posts }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || posts.length <= 1) return;

    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [posts]);

  return (
    <motion.section
      className="relative py-16 px-6 bg-gradient-to-r from-purple-100 via-pink-50 to-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Decorative floating orbs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
         Inside PRISM 
      </motion.h2>

      {/* Blog Slider */}
      <motion.div
        ref={sliderRef}
        className="flex space-x-8 overflow-x-auto scrollbar-hide pb-6 px-2"
        style={{
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            className="min-w-[320px] max-w-[340px] inline-block bg-white rounded-3xl shadow-xl hover:shadow-purple-300 transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden border border-purple-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={`/prism/${post.slug}`} className="block">
              <div className="relative h-52 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
