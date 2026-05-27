import { Box, Text, Image } from '@mantine/core';

interface FigureBlockProps {
    index: number;
    description: string;
    path: string;
}

export default function FigureBlock({ index, description, path }: FigureBlockProps) {
    return (
        <Box my="xl">
            <Text c="dimmed" size="sm" mb="xs">
                Figure {index}
            </Text>
            <Image
                src={path}
                alt={description}
                radius="md"
                fit="contain"
                style={{
                    border: '1px solid var(--mantine-color-gray-3)',
                    maxWidth: '100%',
                    maxHeight: '40vh',
                    backgroundColor: 'white',
                }}
            />
            <Text
                c="dimmed"
                size="xs"
                ta="center"
                mt="xs"
                style={{ fontStyle: 'italic', display: 'block' }}
            >
                {description}
            </Text>
        </Box>
    );
}