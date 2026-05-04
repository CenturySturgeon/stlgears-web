'use client';

import { useState } from 'react';
import { Box, Button, Card, Center, Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import FormModal from '@/components/Form/FormModal/FormModal';
import HoverCardInput from '../Form/Inputs/HoverCardInput';

// TODO: Hard type the HoverCardInput props and import them
type AnyHoverCardInputProps = {
    InputComponent: React.ComponentType<any>;
    inputProps: Record<string, any>;
    helpText?: string;
    helpImage?: string;
    helpLink?: {
        href: string;
        label: string;
    };
};

type Props = {
    image: string;
    title: string;
    description: string;
    inputConfigs: AnyHoverCardInputProps[];
};

export default function GearCard({ image, title, description, inputConfigs }: Props) {
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

                <Button mt="md" onClick={() => setOpened(true)}>
                    Customize
                </Button>
            </Card>

            <FormModal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
            >
                <Container size="md">
                    <Grid gap="md">
                        {inputConfigs.map((inputConfig, index) => (
                            <Grid.Col
                                span={{ base: 12, sm: 6 }}
                                key={index}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <HoverCardInput {...inputConfig} />
                            </Grid.Col>
                        ))}
                    </Grid>
                    <Center mt="lg">
                        <Button>Submit</Button>
                    </Center>
                </Container>
            </FormModal>
        </>
    );
}