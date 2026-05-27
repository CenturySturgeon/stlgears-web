// app/theory/figures/page.tsx
import { Container, Title, Text, Box } from '@mantine/core';
import { FIGURES } from '@/content/figures';
import FigureBlock from '@/components/FigureBlock/FigureBlock';

export default function FiguresPage() {
    const figuresList = Object.values(FIGURES).sort((a, b) => a.index - b.index);

    return (
        <Container size="md" py="xl">
            <Title order={1} mb="sm" c="text">
                Figures Summary
            </Title>
            <Text c="dimmed" mb="xl">
                A complete reference of all figures used across the theory guides.
            </Text>
            <Box>
                {figuresList.map((fig) => (
                    <FigureBlock
                        key={fig.index}
                        index={fig.index}
                        description={fig.description}
                        path={fig.path}
                    />
                ))}
            </Box>
        </Container>
    );
}