'use client';

import { useState } from 'react';
import { Button, Card } from '@mantine/core';
import GearCardHeader from './GearCardHeader';
import FormModal from '@/components/Form/FormModal/FormModal';
import GearCardForm from './GearCardForm';

// TODO: Hard type the HoverCardInput props and import them
export type AnyHoverCardInputProps = {
    InputComponent: React.ComponentType<any>;
    inputProps: Record<string, any>;
    helpText?: string;
    helpImage?: string;
    helpLink?: {
        href: string;
        label: string;
    };
};

type GearCardProps = {
    image: string;
    title: string;
    description: string;
    inputConfigs: AnyHoverCardInputProps[];
};

export default function ({ image, title, description, inputConfigs }: GearCardProps) {
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
                <GearCardHeader
                    image={image}
                    title={title}
                    description={description}
                />

                <Button mt="md" onClick={() => setOpened(true)}>
                    Customize
                </Button>
            </Card>

            <FormModal
                opened={opened}
                onClose={() => setOpened(false)}
                title={title}
            >
                <GearCardForm inputConfigs={inputConfigs} />
            </FormModal>
        </>
    );
}