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
    <section className="py-12 px-6 bg-secondary/10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
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
            className="min-w-[300px] max-w-[320px] inline-block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <Link href={`/prism/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
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
