
import { Container } from "@mantine/core";
import GearCard from "@/components/GearCard/GearCard";

// Put the generic homepage cards here and talk about file formats

export default function Generators() {
    return (
        <Container size="xl">
            <GearCard
                image="/images/image.png"
                title="Spur Gear"
                description="I am a tiny description"
            />
        </Container>
    )
}