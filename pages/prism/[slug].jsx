import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function Post({ frontmatter, content }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose prose-lg prose-indigo">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{frontmatter.title}</h1>

      {/* Meta info */}
      <div className="text-sm text-gray-500 mb-8">
        <span>{frontmatter.date}</span> · <span>{frontmatter.author}</span>
      </div>

      {/* Hero image */}
      {frontmatter.image && (
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="rounded-xl shadow-md mb-8 w-full"
        />
      )}

      {/* Markdown content */}
      <div
        className="prose prose-lg prose-indigo max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </article>
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
