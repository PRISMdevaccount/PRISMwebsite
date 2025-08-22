import SectionWrapper from "@/components/SectionWrapper";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BlogSlider from "@/components/BlogSlider";

export default function Home({ posts }) {
  return (
    <main className="overflow-x-hidden">
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Features />
      </SectionWrapper>

      <SectionWrapper>
        <BlogSlider posts={posts} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-800">Contact Us</h2>
          <p className="mt-4 text-gray-600">
            Reach out at <a href="mailto:diyaramakrishnan009@gmail.com" className="text-purple-500">our email</a>
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
