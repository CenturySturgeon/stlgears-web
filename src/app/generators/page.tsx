import { Container, SimpleGrid } from "@mantine/core";
import GearCard from "@/components/GearCard/GearCard";
import { cardsData } from "./config";

const small_margin = 40

export default function Generators() {
    return (
        <Container my={small_margin} size="lg">
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 3 }}
                spacing="lg"
            >
                {cardsData.map((card, index) => (
                    <GearCard key={index} {...card} />
                ))}
            </SimpleGrid>
        </Container>
    );
}