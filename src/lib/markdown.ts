import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { EQUATIONS, EquationId } from '@/content/equations';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getMarkdownData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  let processedContent = matterResult.content;

  // Regex to find all instances of {{eq:some_id}}
  processedContent = processedContent.replace(/\{\{eq:([^}]+)\}\}/g, (match, id) => {
    const eqId = id as EquationId;
    const eq = EQUATIONS[eqId];

    if (eq) {
      // Return a JSON payload inside an "equation" code block
      return `\n\n\`\`\`equation\n${JSON.stringify(eq)}\n\`\`\`\n\n`;
    }

    // If the ID is wrong, leave the tag so you notice the typo
    return match;
  });

  return {
    slug,
    content: processedContent,
    ...(matterResult.data as { title?: string; date?: string }),
  };
}

export function getAllTheorySlugs() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }));
}

export function getTheoryNavigation() {
  const fileNames = fs.readdirSync(contentDirectory).filter((fileName) => fileName.endsWith('.md'));

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