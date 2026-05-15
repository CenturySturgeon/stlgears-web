'use client';

import { useState } from 'react';
import { Button, Card } from '@mantine/core';
import FormModal from '@/components/Form/FormModal/FormModal';
import GearCardHeader from './GearCardHeader';
import GearCardForm from './GearCardForm';
import { GearCardWithForm } from '@/types/gearCards';

export default function GearCard(gearCard: GearCardWithForm) {
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
                <GearCardForm type={gearCard.type} formSections={gearCard.formSections} validate={gearCard.validate} />
            </FormModal>
        </>
    );
}