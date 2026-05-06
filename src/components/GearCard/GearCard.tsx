'use client';

import { useState } from 'react';
import { Button, Card } from '@mantine/core';
import GearCardHeader from './GearCardHeader';
import FormModal from '@/components/Form/FormModal/FormModal';
import GearCardForm from './GearCardForm';
import { InputConfig } from '@/types/inputConfigs';

type GearCardProps = {
    title: string;
    type: string;
    image: string;
    description: string;
    inputConfigs: InputConfig[];
};

export default function GearCard({ title, type: gear_type, image, description, inputConfigs }: GearCardProps) {
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
                <GearCardForm gear_type={gear_type} inputConfigs={inputConfigs} />
            </FormModal>
        </>
    );
}