import { Container, Title, Text, Box } from '@mantine/core';
import { EQUATIONS } from '@/content/equations';
import EquationBlock from '@/components/EquationBlock/EquationBlock';

// Important: import Katex CSS so the EquationBlock renders the math correctly
import 'katex/dist/katex.min.css';

export const metadata = {
    title: 'Equations Summary',
    description: 'A comprehensive reference of all mathematical equations used in the theory section.',
};

export default function EquationsPage() {
    // Convert the EQUATIONS object into an array and sort it by the equation number
    const equationsList = Object.values(EQUATIONS).sort((a, b) => a.number - b.number);

    return (
        <Container size="md" py="xl">
            <Title order={1} mb="sm" c="text">
                Equations Summary
            </Title>
            <Text c="dimmed" mb="xl">
                A complete reference of all mathematical equations used across the theory guides.
            </Text>

            <Box>
                {equationsList.map((eq) => (
                    <EquationBlock
                        key={eq.number}
                        number={eq.number}
                        name={eq.name}
                        formula={eq.formula}
                        description={eq.description}
                        copyText={eq.copyText}
                    />
                ))}
            </Box>
        </Container>
    );
}