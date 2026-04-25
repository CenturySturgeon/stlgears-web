import { getMarkdownData, getAllTheorySlugs } from '@/lib/markdown';
import { Typography, Container, Title } from '@mantine/core';
import { notFound } from 'next/navigation';

// generateStaticParams remains the same as it handles the promise internally
export async function generateStaticParams() {
  const slugs = getAllTheorySlugs();
  return slugs;
}

export default async function TheoryPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 1. Define params as a Promise
}) {
  // 2. Await the params object itself
  const { slug } = await params;

  try {
    // 3. Use the unwrapped slug
    const theoryData = await getMarkdownData(slug);

    return (
      <Container size="md" py="xl">
        {theoryData.title && (
          <Title order={1} mb="xl">
            {theoryData.title}
          </Title>
        )}
        
        <Typography>
          <div dangerouslySetInnerHTML={{ __html: theoryData.contentHtml }} />
        </Typography>
      </Container>
    );
  } catch (error) {
    // This will trigger if the file doesn't exist in src/content
    notFound();
  }
}