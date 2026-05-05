'use client';

import { Box, Card, Image, Stack, Text, Title } from '@mantine/core';

type GearCardHeaderProps = {
    image: string;
    title: string;
    description: string;
}

export default function GearCardHeader({ image, title, description }: GearCardHeaderProps) {
    return (
        <>
            <Card.Section>
                <Box
                    style={{
                        position: 'relative',
                        height: 180,
                        overflow: 'hidden',
                        // Optional: add a subtle inner shadow to enhance the "window" look
                        // boxShadow: 'inset 0px 0px 10px rgba(0,0,0,0.1)',
                    }}
                >
                    <Box
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: `
                                        url('/patterns/pattern_logo.svg'),
                                        url('/patterns/pattern_logo.svg')
                                        `,
                            backgroundSize: '160px 160px, 160px 160px',
                            backgroundRepeat: 'repeat, repeat',
                            backgroundPosition: '0 0, 80px 80px',
                            backgroundAttachment: 'fixed',
                        }}
                    />

                    <Image
                        src={image}
                        alt={title}
                        height={180}
                        fit="contain"
                        style={{ position: 'relative', zIndex: 1 }}
                    />
                </Box>
            </Card.Section>
            <Stack mt="md" style={{ flex: 1, alignItems: 'center' }}>
                <Title order={4}>{title}</Title>

                <Text size="sm" c="dimmed">
                    {description}
                </Text>
            </Stack>
        </>
    )
}