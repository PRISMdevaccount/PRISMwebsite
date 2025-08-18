import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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
    }, 20); // Speed: lower = faster

    return () => clearInterval(scrollInterval);
  }, [posts]);

  return (
    <section className="relative py-12 px-6 bg-gradient-to-r from-purple-50 via-green-50 to-white overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full opacity-20 animate-pulse"></div>

      <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-800">
        Inside PRISM
      </h2>

      <div
        ref={sliderRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{
          scrollBehavior: 'smooth',
          whiteSpace: 'nowrap',
        }}
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            className="min-w-[300px] max-w-[320px] inline-block bg-white rounded-3xl shadow-2xl hover:shadow-purple-300 transition-shadow transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <Link href={`/prism/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
