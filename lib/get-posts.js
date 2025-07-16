import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: typeof data.date === 'string' ? data.date : (data.date?.toISOString?.() ?? ''), // ✅ SAFE
      excerpt: data.excerpt || '',
      image: data.image || '/blog/placeholder.jpg',
    };
  }).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      date: typeof data.date === 'string' ? data.date : (data.date?.toISOString?.() ?? ''), // ✅ SAFE
      excerpt: data.excerpt || '',
      image: data.image || '/blog/placeholder.jpg',
      content,
    };
}
