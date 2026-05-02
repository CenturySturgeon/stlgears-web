'use client';

import { useState } from 'react';
import { Box, Button, Card, Image, Modal, Stack, Text, Title } from '@mantine/core';

type GearCardProps = {
    image: string;
    title: string;
    description: string;
};

export default function GearCard({
    image,
    title,
    description,
}: GearCardProps) {
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
                    <Box style={{
                        position: 'relative',
                        height: 180,
                        overflow: 'hidden',
                    }}>
                        {/* Diamond pattern background */}
                        <Box style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: "url('/logo.svg')",
                            backgroundSize: "50px 50px",
                            backgroundRepeat: "repeat",
                            transform: "scale(1.41)",


                            // --- ADDED CHECKERED MASK ---
                            // The mask size is 80px (exactly double your 40px background size)
                            WebkitMaskImage: "conic-gradient(#000 25%, transparent 25% 50%, #000 50% 75%, transparent 75%)",
                            WebkitMaskSize: "100px 100px",
                            maskImage: "conic-gradient(#000 25%, transparent 25% 50%, #000 50% 75%, transparent 75%)",
                            maskSize: "100px 100px",
                        }} />

                        {/* Your image */}
                        <Image
                            src={image}
                            alt={title}
                            height={180}
                            fit="contain"
                            style={{ position: 'relative', zIndex: 1 }}
                        />
                    </Box>
                </Card.Section>

                <Stack
                    mt="md"
                    style={{
                        flex: 1, // allows text area to grow
                        alignItems: "center"
                    }}
                >
                    <Title order={4}>
                        {title}
                    </Title>

                    <Text size="sm" c="dimmed">
                        {description}
                    </Text>
                </Stack>

                <Button
                    mt="md"
                    onClick={() => setOpened(true)}
                >
                    Customize
                </Button>
            </Card>

            {/* Modal (basic placeholder) */}
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
                centered
            >
                <Text size="sm">
                    Modal content for "{title}" goes here.
                </Text>
            </Modal>
        </>
    );
}