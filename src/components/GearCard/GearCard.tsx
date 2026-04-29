'use client';

import { useState } from 'react';
import { Card, Image, Text, Button, Modal, Stack, Title } from '@mantine/core';

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
                    maxWidth: '33%'
                }}
            >
                {/* Image */}
                <Card.Section>
                    <Image
                        src={image}
                        alt={title}
                        height={180} // fixed image height across all cards
                        fit="contain"
                        style={{ backgroundColor: "aliceblue" }}
                    />
                </Card.Section>

                {/* Content */}
                <Stack
                    mt="md"
                    style={{
                        flex: 1, // allows text area to grow
                        alignItems: "center"
                    }}
                >
                    {/* Title */}
                    <Title order={4}>
                        {title}
                    </Title>

                    {/* Description */}
                    <Text size="sm" c="dimmed">
                        {description}
                    </Text>
                </Stack>

                {/* Button pinned to bottom */}
                <Button
                    mt="md"
                    onClick={() => setOpened(true)}
                >
                    Open
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