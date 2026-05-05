import { useForm } from '@mantine/form';
import { InputConfig } from '@/types/inputConfigs';
import { Button, Center, Container, Grid, NumberInput } from '@mantine/core';
import HoverCardInput from '@/components/Form/Inputs/HoverCardInput/HoverCardInput';

export default function GearCardForm({
    inputConfigs,
}: {
    inputConfigs: InputConfig[];
}) {
    const initialValues = inputConfigs.reduce((acc, config) => {
        const isNumberInput = config.InputComponent === NumberInput;
        acc[config.inputProps.name] = config.inputProps.defaultValue || (isNumberInput ? 0 : '');
        return acc;
    }, {} as Record<string, any>);

    const form = useForm({
        initialValues,
    });

    return (
        <Container size="md">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                <Center mt="lg">
                    <Button type="submit">Submit</Button>
                </Center>
            </form>
        </Container>
    );
}