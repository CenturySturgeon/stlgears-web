'use client';

import { useState } from 'react';
import { Box, Button, Card, Image, Stack, Text, Title } from '@mantine/core';
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

export default function ({ image, title, description, inputConfigs }: Props) {
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
                {inputConfigs.map((inputConfig, index) => (
                    <HoverCardInput key={index} {...inputConfig} />
                ))}
            </FormModal>
        </>
    );
}