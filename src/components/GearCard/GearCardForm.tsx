import { useForm } from '@mantine/form';
import { Accordion, Button, Center, Container, Grid, NumberInput, Text } from '@mantine/core';
import HoverCardInput from '@/components/Form/Inputs/HoverCardInput/HoverCardInput';
import { GearCardWithForm } from '@/types/gearCards';

type GearCardFormProps = Pick<GearCardWithForm, "type" | "formSections" | "validate">

export default function GearCardForm({ type: gearType, formSections, validate: validations }: GearCardFormProps) {

    const allInputConfigs = formSections.flatMap(section =>
        section.inputs
    );

    // Build initial values from gear type and input configs
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
        validate: validations || {},
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

                                <Grid gap="md">

                                    {section.inputs.map((inputConfig, i) => {
                                        // Check visibility condition
                                        if (inputConfig.showWhen && !inputConfig.showWhen(form.values)) {
                                            return null; // Skip rendering if condition fails
                                        }

                                        return (
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
                                        );
                                    })}
                                </Grid>

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