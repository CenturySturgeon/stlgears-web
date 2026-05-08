import { useForm } from '@mantine/form';
import { Accordion, Button, Center, Container, Grid, NumberInput, Text } from '@mantine/core';
import HoverCardInput from '@/components/Form/Inputs/HoverCardInput/HoverCardInput';
import { AccordionSection } from '@/app/generators/stl/config';

export default function GearCardForm({ gearType, formSections }: {
    gearType: string,
    formSections: AccordionSection[];
}) {
    const allInputConfigs = formSections.flatMap(section =>
        section.content.type === 'input-grid'
            ? section.content.inputConfigs
            : []
    );

    // Build initial values from gear type, holeType, and all input configs
    const initialValues = {
        type: gearType,
        ...allInputConfigs.reduce((acc, config) => {
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
                <Accordion variant="contained" defaultValue={formSections[0]?.label.toLowerCase().replace(' ', '-')} order={3}>
                    {formSections.map((section, index) => (
                        <Accordion.Item key={index} value={section.label.toLowerCase().replace(' ', '-')}>
                            <Accordion.Control icon={<section.icon size={22} />}>
                                <div>
                                    <div>{section.label}</div>
                                    <Text size="sm" c="dimmed">{section.description}</Text>
                                </div>
                            </Accordion.Control>
                            <Accordion.Panel>
                                {section.content.type === 'input-grid' ? (
                                    <Grid gap="md">
                                        {section.content.inputConfigs.map((inputConfig, i) => (
                                            <Grid.Col
                                                span={{ base: 12, sm: 6 }}
                                                key={i}
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
                                ) : (
                                    <section.content.component form={form} />
                                )}
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                    <Center mt="lg">
                        <Button type="submit">Submit</Button>
                    </Center>
                </Accordion>
            </form>
        </Container>
    );
}