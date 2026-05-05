import { SITE_CONFIG } from '@/config';
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import {
  Container,
  Title,
  Text,
  Group,
  Grid,
  GridCol,
  Card,
  Box,
  SimpleGrid,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCube,
  IconVectorTriangle,
  IconArrowRight,
  IconBook,
  IconInfoCircle,
} from "@tabler/icons-react";

const large_margin = 80
const small_margin = 40
const margins = { base: small_margin, sm: large_margin } // Devices bigger than sm get the 80 value (only phones get the base)

export default function HomePage() {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box py={margins}>
        <Container size="lg">
          <Box ta="center" maw={800} mx="auto">
            <Title order={1} size="h1" fw={900} mb="lg">
              Skip the CAD work,{" "}
              <Text component="span" c="logoBlue" inherit>
                model for free
              </Text>
            </Title>
            <Text c="dimmed" size="xl" mb="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </Text>
          </Box>
        </Container>
      </Box>

      {/* GENERATOR CARDS SECTION (Symmetrical Zig-Zag) */}
      <Container size="lg">
        <Card withBorder shadow="sm" radius="md" p={0} mb={margins}>
          <Grid align="stretch">
            {/* Image Side (Left) */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Box
                h="100%"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--mantine-color-slate-1)", // Uses your custom slate palette
                }}
              >
                <Box ta="center">
                  <IconCube size={80} color="var(--mantine-color-logoBlue-6)" />
                  <Text mt="md" fw={500} c="dimmed">
                    [ Image here ]
                  </Text>
                </Box>
              </Box>
            </GridCol>

            {/* Text Side (Right) */}
            <GridCol span={{ base: 12, md: 6 }}>
              <Box p={{ base: "xl", md: 60 }}>
                <Title order={2} mb="md">
                  Card title
                </Title>
                <Text c="dimmed" size="lg" mb="xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Text>
                <ButtonLink
                  href={SITE_CONFIG.routes.generators.items.stl}
                  variant="light"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Button here
                </ButtonLink>
              </Box>
            </GridCol>
          </Grid>
        </Card>

        <Card withBorder shadow="sm" radius="md" p={0} mb={margins}>
          <Grid align="stretch">
            {/* Text Side (Left) */}
            <GridCol span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Box p={{ base: "xl", md: 60 }}>
                <Title order={2} mb="md">
                  Card title
                </Title>
                <Text c="dimmed" size="lg" mb="xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Text>
                <ButtonLink
                  href={SITE_CONFIG.routes.generators.items.dxf}
                  variant="light"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Card button
                </ButtonLink>
              </Box>
            </GridCol>

            {/* Image Side (Right) */}
            <GridCol span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Box
                h="100%"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--mantine-color-sand-1)", // Uses your custom sand palette
                }}
              >
                <Box ta="center">
                  <IconVectorTriangle size={80} color="var(--mantine-color-logoBlue-6)" />
                  <Text mt="md" fw={500} c="dimmed">
                    [ Another image here ]
                  </Text>
                </Box>
              </Box>
            </GridCol>
          </Grid>
        </Card>
      </Container>

      {/* THEORY & ABOUT CARDS (Supplemental usefulness below) */}


      <Container size="lg" mb={margins}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Card withBorder shadow="sm" radius="md" >
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="logoBlue.1">
                <IconBook size={24} color="var(--mantine-color-logoBlue-6)"/>
              </ThemeIcon>
              <Title order={3} size="h4">Theory</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <ButtonLink
              href={SITE_CONFIG.routes.theory}
              variant="subtle" px="--button-padding-x"
              rightSection={<IconArrowRight size={16} />}
            >
              Read the docs
            </ButtonLink>
          </Card>

          <Card withBorder shadow="sm" radius="md" >
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="sand.2">
                <IconInfoCircle size={24} color="var(--mantine-color-sand-9)" />
              </ThemeIcon>
              <Title order={3} size="h4">About MySite.com</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <ButtonLink
              href={SITE_CONFIG.routes.about}
              variant="subtle"
              color="sand"
              px="--button-padding-x"
              rightSection={<IconArrowRight size={16} />}
            >
              Read about the site
            </ButtonLink>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}