'use client' // This comes from the 'icon' in the AccordionSection Type in stl/config

import { SITE_CONFIG } from '@/config';
import { GearCards } from "@/forms/configs/generators/stl/cards";
import { Box, Container, SimpleGrid, Text, Title } from "@mantine/core";
import GearCard from "@/components/GearCard/GearCard";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { DropzoneButton } from '@/components/DropzoneButton/DropzoneButton';

const small_margin = 40

export default function Generators() {
    return (
        <Container my={small_margin} size="lg">
            <Box pb={small_margin}>
                <Container size="lg">
                    <Box ta="center" maw={800} mx="auto">
                        <Title order={1} size="h1" fw={900}>
                            Let us do the math,{" "}
                            <Text component="span" c="logoBlue" inherit>
                                get your models fast
                            </Text>
                        </Title>
                        <Text c="dimmed" size="xl" mb="sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <ButtonLink href={SITE_CONFIG.routes.theory} variant="light" color="sand">
                            Learn more...
                        </ButtonLink>
                    </Box>
                </Container>
            </Box>
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing="lg"
            >
                {GearCards.map((card, index) => (
                    <GearCard key={index} {...card} />
                ))}
            </SimpleGrid>

            <Box my="md">
                <DropzoneButton />
            </Box>

        </Container>
    );
}