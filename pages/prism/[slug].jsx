import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function Post({ frontmatter, content }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-green-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-400 to-green-400 text-white py-20 shadow-lg">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-sm opacity-90">
            {frontmatter.date} · {frontmatter.author}
          </p>
        </div>
      </header>

      {/* Post Container */}
      <main className="max-w-4xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Removed inline image rendering */}

          {/* Markdown content */}
          <article
            className="prose prose-lg prose-indigo max-w-none prose-headings:font-bold prose-h2:text-purple-600 prose-h3:text-green-600 prose-a:text-purple-600 prose-a:font-semibold hover:prose-a:text-purple-800"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />

          {/* Decorative Box */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-green-100 to-purple-100 shadow-inner border-l-4 border-purple-400">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              💡 Key Insight
            </h3>
            <p className="text-gray-700">
              {frontmatter.takeaway ||
                "This research reflects PRISM’s mission to push boundaries in surgical innovation."}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
