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

// Add this to src/lib/markdown.ts
export function getTheoryNavigation() {
  const fileNames = fs.readdirSync(contentDirectory);
  
  const navItems = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      label: (matterResult.data.title as string) || slug,
      href: `/theory/${slug}`,
      order: (matterResult.data.order as number) || 99, // Push files without order to the bottom
    };
  });

  // Sort by order and remove the order field so we only pass clean data to the client
  return navItems
    .sort((a, b) => a.order - b.order)
    .map(({ label, href }) => ({ label, href }));
}