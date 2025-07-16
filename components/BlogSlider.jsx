import Link from 'next/link';
import Image from 'next/image';

export default function BlogSlider({ posts }) {
  return (
    <section className="py-12 px-6 bg-secondary/10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Inside PRISM</h2>
      <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/prism/${post.slug}`}
            className="min-w-[300px] max-w-sm flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
