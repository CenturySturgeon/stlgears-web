import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { EQUATIONS, EquationId } from '@/content/equations';
import { FIGURES } from '@/content/figures';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getMarkdownData(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  let processedContent = matterResult.content;

  /**
   * 1. Image Path Normalization
   */
  processedContent = processedContent
    // 1. Replace {{fig:id.property}} with the property value
    .replace(/\{\{fig:([^}.]+)\.([^}]+)\}\}/g, (match, id, property) => {
      const fig = FIGURES[id as keyof typeof FIGURES];
      return fig ? String((fig as any)[property]) : match;
    })
    // 2. Replace {{fig:id}} with markdown image syntax
    .replace(/\{\{fig:([^}]+)\}\}/g, (match, id) => {
      const fig = FIGURES[id as keyof typeof FIGURES];
      if (!fig) return match;
      // Use the raw path (../../public/...) for VS Code preview
      return `![${fig.description}](${fig.path})`;
    })
    // 3. Normalize paths (existing)
    .replace(
      /!\[(.*?)\]\(\.\.\/\.\.\/public(.*?)\)/g,
      '![$1]($2)'
    )

  /**
   * 2. Equation System
   * regex: {{eq:id.property}}
   */
  processedContent = processedContent.replace(/\{\{eq:([^}.]+)(?:\.([^}]+))?\}\}/g, (match, id, property) => {
    const eqId = id as EquationId;
    const eq = EQUATIONS[eqId];

    if (!eq) return match;

    // Inline properties (e.g., number or description)
    if (property) {
      const val = (eq as any)[property];
      if (val !== undefined) return String(val);
      return match;
    }

    // Full Block (renders the EquationBlock component)
    return `\n\n\`\`\`equation\n${JSON.stringify(eq)}\n\`\`\`\n\n`;
  });

  return {
    slug,
    content: processedContent,
    ...(matterResult.data as { title?: string; description?: string; order?: number }),
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
      order: (matterResult.data.order as number) || 99,
    };
  });

  return navItems
    .sort((a, b) => a.order - b.order)
    .map(({ label, href }) => ({ label, href }));
}