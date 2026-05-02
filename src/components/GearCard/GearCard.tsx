'use client';

import { useState } from 'react';
import { Box, Button, Card, Image, Stack, Text, Title } from '@mantine/core';
import FormModal from '@/components/Form/FormModal/FormModal';

type Props = {
    image: string;
    title: string;
    description: string;
};

export default function ({ image, title, description }: Props) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Card
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <Card.Section>
                    <Box
                        style={{
                            position: 'relative',
                            height: 180,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: "url('/logo.svg')",
                                backgroundSize: "50px 50px",
                                backgroundRepeat: "repeat",
                                transform: "scale(1.41)",
                                WebkitMaskImage:
                                    "conic-gradient(#000 25%, transparent 25% 50%, #000 50% 75%, transparent 75%)",
                                WebkitMaskSize: "100px 100px",
                                maskImage:
                                    "conic-gradient(#000 25%, transparent 25% 50%, #000 50% 75%, transparent 75%)",
                                maskSize: "100px 100px",
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

                <Button mt="md" onClick={() => setOpened(true)}>
                    Customize
                </Button>
            </Card>

            <FormModal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
            >
                {/* dynamic content goes here */}
                <Text size="sm">You can inject anything here.</Text>
            </FormModal>
        </>
    );
}