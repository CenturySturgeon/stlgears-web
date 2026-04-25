import { getMarkdownData, getAllTheorySlugs } from '@/lib/markdown';
import { Typography, Container, Title } from '@mantine/core';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; // <-- Import here

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
          <Title order={1} mb="xl">
            {theoryData.title}
          </Title>
        )}

        <Typography>
          {/* Safe, native React rendering without dangerous HTML injection */}
          <ReactMarkdown>{theoryData.content}</ReactMarkdown>
        </Typography>
      </Container>
    );
  } catch (error) {
    notFound();
  }
}