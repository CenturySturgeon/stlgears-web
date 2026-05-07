import { useForm } from '@mantine/form';
import { InputConfig } from '@/types/inputConfigs';
import { Accordion, Button, Center, Container, Grid, NumberInput, Text } from '@mantine/core';
import HoverCardInput from '@/components/Form/Inputs/HoverCardInput/HoverCardInput';
import { HoleTypeSelector } from '../Form/Inputs/HoleSelector/HoleSelector';
import { IconAdjustmentsCog, IconSettings, IconAdjustmentsAlt, IconAdjustmentsPlus } from '@tabler/icons-react';

export default function GearCardForm({
    gear_type,
    inputConfigs,
}: {
    gear_type: string,
    inputConfigs: InputConfig[];
}) {
    const typeValues = { type: gear_type };
    const initialValues = {
        ...typeValues,
        holeType: 'none', // Add this line
        ...inputConfigs.reduce((acc, config) => {
            const isNumberInput = config.InputComponent === NumberInput;
            acc[config.inputProps.name] = config.inputProps.defaultValue || (isNumberInput ? 0 : '');
            return acc;
        }, {} as Record<string, any>)
    };

    const form = useForm({
        initialValues,
    });

    return (
        <Container size="md">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <Accordion variant="contained" defaultValue="photos" order={3}>
                    <Accordion.Item value="photos">
                        <Accordion.Control
                            icon={<IconAdjustmentsAlt size={22} color="var(--mantine-color-dimmed)" />}
                        >
                            <div>
                                <div>Base</div>
                                <Text size="sm" c="dimmed">
                                    Required gear parameters
                                </Text>
                            </div>
                        </Accordion.Control>
                        <Accordion.Panel>
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
                                        <HoverCardInput
                                            {...inputConfig}
                                            inputProps={{
                                                ...inputConfig.inputProps,
                                                ...form.getInputProps(inputConfig.inputProps.name),
                                            }}
                                        />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="hole-type">
                        <Accordion.Control
                            icon={<IconSettings size={22} color="var(--mantine-color-dimmed)" />}
                        >
                            <div>
                                <div>Hole</div>
                                <Text size="sm" c="dimmed">
                                    Configure hole type and dimensions
                                </Text>
                            </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <HoleTypeSelector form={form} />
                        </Accordion.Panel>
                    </Accordion.Item>

                    <Center mt="lg">
                        <Button type="submit">Submit</Button>
                    </Center>
                </Accordion>
            </form>
        </Container>
    );
}