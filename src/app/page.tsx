import Link from "next/link";
import {
  Container,
  Title,
  Text,
  Button,
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

export default function HomePage() {
  return (
    <Box pb={60}>
      {/* HERO SECTION */}
      <Box pt={80} pb={80}>
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
        <Card withBorder shadow="sm" radius="md" p={0} mb={80}>
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
                <Link href="/3d-generator" style={{ textDecoration: "none" }}>
                  <Button
                    variant="light"
                    rightSection={<IconArrowRight size={16} />}
                  >
                    Button here
                  </Button>
                </Link>
              </Box>
            </GridCol>
          </Grid>
        </Card>

        <Card withBorder shadow="sm" radius="md" p={0} mb={80}>
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
                <Link href="/2d-generator" style={{ textDecoration: "none" }}>
                  <Button
                    variant="light"
                    rightSection={<IconArrowRight size={16} />}
                  >
                    Card button
                  </Button>
                </Link>
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


      <Container size="lg" mt={{ base: 40, md: 80 }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Card withBorder shadow="sm" radius="md" >
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="logoBlue">
                <IconBook size={24} />
              </ThemeIcon>
              <Title order={3} size="h4">Theory</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Link href="/theory" style={{ textDecoration: "none" }}>
              <Button
                variant="subtle" px="--button-padding-x"
                rightSection={<IconArrowRight size={16} />}
              >
                Read the docs
              </Button>
            </Link>
          </Card>

          <Card withBorder shadow="sm" radius="md" >
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="sand">
                <IconInfoCircle size={24} color="var(--mantine-color-sand-9)" />
              </ThemeIcon>
              <Title order={3} size="h4">About MySite.com</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button
                variant="subtle"
                color="sand"
                px="--button-padding-x"
                rightSection={<IconArrowRight size={16} />}
              >
                Read about the site
              </Button>
            </Link>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}