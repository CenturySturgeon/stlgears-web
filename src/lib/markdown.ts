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

  /**
   * regex breakdown:
   * \{\{eq:     -> Match the prefix
   * ([^}.]+)    -> Group 1: The Equation ID (e.g., 'pythagoras')
   * (?:\.       -> Start of an optional non-capturing group for the dot
   * ([^}]+)   -> Group 2: The Property name (e.g., 'number')
   * )?          -> End of optional group
   * \}\}        -> Match the closing suffix
   */
  processedContent = processedContent.replace(/\{\{eq:([^}.]+)(?:\.([^}]+))?\}\}/g, (match, id, property) => {
    const eqId = id as EquationId;
    const eq = EQUATIONS[eqId];

    if (!eq) return match; // Typo protection

    // Case 1: Specific property requested (e.g., {{eq:pythagoras.number}})
    if (property) {
      // Access the property dynamically
      const val = (eq as any)[property];
      
      if (val !== undefined) {
        return String(val); // Return '1', 'The formula for...', etc.
      }
      
      return match; // Property doesn't exist? Keep the tag.
    }

    // Case 2: Full block requested (e.g., {{eq:pythagoras}})
    return `\n\n\`\`\`equation\n${JSON.stringify(eq)}\n\`\`\`\n\n`;
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