import { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { getMarkdownData } from '@/lib/markdown';
import { Container, Title, Text, Anchor, Code, Box, Image } from '@mantine/core';
import EquationBlock from '@/components/EquationBlock/EquationBlock';
import TheoryClientLayout from "@/components/TheoryClientLayout/TheoryClientLayout";

export const metadata: Metadata = {
    title: "All Theory Content",
    description: "All theory content bundled together for easy reference.",
};

export default async function AllTheoryPage() {
    const contentDirectory = path.join(process.cwd(), 'src/content');
    const fileNames = fs.readdirSync(contentDirectory).filter((fileName) => fileName.endsWith('.md'));

    // Fetch and process all markdown files
    const allTheoryData = await Promise.all(
        fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            return getMarkdownData(slug);
        })
    );

    // Sort by the 'order' field in frontmatter
    const sortedTheoryData = allTheoryData.sort((a, b) => (a.order || 99) - (b.order || 99));

    return (
        <Container size="lg" >
            <TheoryClientLayout>
                {sortedTheoryData.map((theoryData) => (
                    <div key={theoryData.slug} style={{ marginBottom: '3rem' }}>
                        {theoryData.title && (
                            <Title order={2} mt="xl" mb="sm" c="text">
                                {theoryData.title}
                            </Title>
                        )}
                        {theoryData.description && (
                            <Text mb="md" c="dimmed">
                                {theoryData.description}
                            </Text>
                        )}

                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                                h1: ({ node, ...props }) => <Title order={1} mt="xl" mb="sm" c="text" {...props} />,
                                h2: ({ node, ...props }) => <Title order={2} mt="xl" mb="sm" c="text" {...props} />,
                                h3: ({ node, ...props }) => <Title order={3} mt="lg" mb="sm" c="text" {...props} />,
                                p: ({ node, ...props }) => (
                                    <Text
                                        component="div"
                                        mb="md"
                                        lh="1.6"
                                        c="text"
                                        {...props}
                                    />
                                ),
                                ul: ({ node, ...props }) => (
                                    <Box component="ul" style={{ paddingLeft: '2rem', marginBottom: '1rem' }} {...props} />
                                ),
                                ol: ({ node, ...props }) => (
                                    <Box component="ol" style={{ paddingLeft: '2rem', marginBottom: '1rem' }} {...props} />
                                ),
                                li: ({ node, children, ...props }) => (
                                    <Box component="li" mb={4} style={{ lineHeight: '1.6', color: 'var(--mantine-color-text)' }} {...props}>
                                        {children}
                                    </Box>
                                ),
                                a: ({ node, ...props }) => <Anchor c="logoBlue.6" underline="hover" {...props} />,
                                img: ({ node, src, alt, ...props }) => (
                                    <Box my="xl" component="span" style={{ display: 'block' }}>
                                        <Image
                                            src={src}
                                            alt={alt}
                                            radius="md"
                                            fit="contain"
                                            style={{
                                                border: '1px solid var(--mantine-color-gray-3)',
                                                maxWidth: '100%',
                                                maxHeight: '40vh',
                                                backgroundColor: 'var(--mantine-color-body)'
                                            }}
                                            {...props}
                                        />
                                        {alt && (
                                            <Text
                                                component="span"
                                                c="dimmed"
                                                size="xs"
                                                ta="center"
                                                mt="xs"
                                                style={{ fontStyle: 'italic', display: 'block' }}
                                            >
                                                {alt}
                                            </Text>
                                        )}
                                    </Box>
                                ),
                                blockquote: ({ node, children, ...props }) => (
                                    <Box
                                        component="blockquote"
                                        p="md" my="md"
                                        style={{
                                            borderLeft: '4px solid var(--mantine-color-logoBlue-5)',
                                            borderRadius: 'var(--mantine-radius-sm)',
                                            backgroundColor: 'var(--mantine-color-gray-0)'
                                        }}
                                        {...props}
                                    >
                                        {children}
                                    </Box>
                                ),
                                pre: ({ node, children }) => <>{children}</>,
                                code({ node, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    const isInline = !className;

                                    if (match && match[1] === 'equation') {
                                        try {
                                            const eqData = JSON.parse(String(children));
                                            return <EquationBlock {...eqData} />;
                                        } catch (e) {
                                            return <Text c="red" size="sm">Error loading equation JSON</Text>;
                                        }
                                    }

                                    return (
                                        <Code
                                            block={!isInline}
                                            className={className}
                                            c="logoBlue.8"
                                            bg="gray.1"
                                            p={isInline ? '0.2rem 0.4rem' : 'md'}
                                            style={{
                                                fontSize: '0.9rem',
                                                overflowX: 'auto',
                                                borderRadius: 'var(--mantine-radius-sm)',
                                                border: isInline ? 'none' : '1px solid var(--mantine-color-gray-3)'
                                            }}
                                            {...props}
                                        >
                                            {children}
                                        </Code>
                                    );
                                }
                            }}
                        >
                            {theoryData.content}
                        </ReactMarkdown>
                    </div>
                ))}
            </TheoryClientLayout>
        </Container>
    );
}