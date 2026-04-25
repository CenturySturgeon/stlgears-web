// src/app/theory/[slug]/page.tsx
import { getMarkdownData, getAllTheorySlugs } from '@/lib/markdown';
import { Container, Title, Text, List, Anchor, Code, Box } from '@mantine/core';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; 

import EquationBlock from '@/components/EquationBlock/EquationBlock';

export async function generateStaticParams() {
  const slugs = getAllTheorySlugs();
  return slugs;
}

export default async function TheoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const theoryData = await getMarkdownData(slug);

    return (
      <Container size="md" py="xl">
        {theoryData.title && (
          <Title order={1} mb="xl" c="slate.9">
            {theoryData.title}
          </Title>
        )}

        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: ({ node, ...props }) => <Title order={1} mt="xl" mb="sm" c="slate.9" {...props} />,
            h2: ({ node, ...props }) => <Title order={2} mt="xl" mb="sm" c="slate.8" {...props} />,
            h3: ({ node, ...props }) => <Title order={3} mt="lg" mb="sm" c="slate.7" {...props} />,
            p: ({ node, ...props }) => <Text mb="md" lh="1.6" c="slate.8" {...props} />,
            
            // Using Box as the list container
            ul: ({ node, ...props }) => (
              <Box component="ul" style={{ paddingLeft: '2rem', marginBottom: '1rem' }} {...props} />
            ),
            ol: ({ node, ...props }) => (
              <Box component="ol" style={{ paddingLeft: '2rem', marginBottom: '1rem' }} {...props} />
            ),
            // Explicitly defining the list item as a standard 'li' styled via Box
            // This bypasses the List.Item "undefined" issue entirely
            li: ({ node, children, ...props }) => (
              <Box 
                component="li" 
                mb={4} 
                style={{ lineHeight: '1.6', color: 'var(--mantine-color-slate-8)' }} 
                {...props}
              >
                {children}
              </Box>
            ),
            
            a: ({ node, ...props }) => <Anchor c="logoBlue.6" underline="hover" {...props} />,
            
            blockquote: ({ node, children, ...props }) => (
              <Box 
                component="blockquote" 
                p="md" 
                my="md" 
                bg="slate.0" 
                style={{ 
                  borderLeft: '4px solid var(--mantine-color-logoBlue-5)', 
                  borderRadius: 'var(--mantine-radius-sm)' 
                }}
                {...props}
              >
                {children}
              </Box>
            ),

            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              
              if (match && match[1] === 'equation') {
                try {
                  const eqData = JSON.parse(String(children));
                  return <EquationBlock {...eqData} />;
                } catch (e) {
                  return <Text c="red" size="sm">Error loading equation JSON</Text>;
                }
              }
              
              return (
                <Code c="logoBlue.7" bg="slate.1" {...props}>
                  {children}
                </Code>
              );
            }
          }}
        >
          {theoryData.content}
        </ReactMarkdown>
      </Container>
    );
  } catch (error) {
    console.error("Markdown rendering error:", error);
    notFound();
  }
}