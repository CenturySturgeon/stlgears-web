import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getMarkdownData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section (frontmatter)
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content, // Pass the raw markdown string, not HTML
    ...(matterResult.data as { title?: string; date?: string }),
  };
}

export function getAllTheorySlugs() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}