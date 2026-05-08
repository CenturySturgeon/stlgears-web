'use client';

import { useState } from 'react';
import { Button, Card } from '@mantine/core';
import GearCardHeader from './GearCardHeader';
import FormModal from '@/components/Form/FormModal/FormModal';
import GearCardForm from './GearCardForm';
import { GearCardType } from '@/app/generators/stl/config';

export default function GearCard(gearCard: GearCardType) {
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
                    image={gearCard.image}
                    title={gearCard.title}
                    description={gearCard.description}
                />

                <Button mt="md" onClick={() => setOpened(true)}>
                    Customize
                </Button>
            </Card>

            <FormModal
                opened={opened}
                onClose={() => setOpened(false)}
                title={gearCard.title}
            >
                <GearCardForm gearType={gearCard.type} formSections={gearCard.formSections} />
            </FormModal>
        </>
    );
}