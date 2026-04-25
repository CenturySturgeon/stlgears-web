import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Path to your markdown content directory
const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getMarkdownData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section (frontmatter)
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    slug,
    contentHtml,
    // Add type assertion if you know your frontmatter structure, e.g.:
    ...(matterResult.data as { title?: string; date?: string }),
  };
}

export function getAllTheorySlugs() {
  // Read all files in the content directory
  const fileNames = fs.readdirSync(contentDirectory);
  
  // Return an array of objects matching the dynamic route parameter
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}