import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  // ✅ ensure no undefined values
  const safeFrontmatter = Object.fromEntries(
    Object.entries(frontmatter).map(([key, value]) => [key, value ?? null])
  );

  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: safeFrontmatter,
      slug,
      mdxSource,
    },
  };
}

export default function PostPage({ frontmatter, mdxSource }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-6">{frontmatter.date}</p>
      <div className="prose prose-lg">
        <MDXRemote {...mdxSource} />
      </div>
    </div>
  );
}
