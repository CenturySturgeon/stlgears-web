import { Button, Center, Container, Grid } from '@mantine/core';
import HoverCardInput from '../Form/Inputs/HoverCardInput';
import { AnyHoverCardInputProps } from './GearCard';


export default function GearCardForm({
    inputConfigs,
}: {
    inputConfigs: AnyHoverCardInputProps[];
}) {
    return (
        <>
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
        </>
    )
}