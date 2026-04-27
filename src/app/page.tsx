"use client";

import Link from "next/link";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Grid,
  Card,
  Badge,
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
    <Box pb="xl">
      {/* HERO SECTION */}
      <Box pt={80} pb={80}>
        <Container size="lg">
          <Box ta="center" maw={800} mx="auto">
            {/* <Badge size="lg" color="logoBlue" variant="light" mb="md">
              The Ultimate Gear Design Tool
            </Badge> */}
            <Title order={1} size="h1" fw={900} mb="lg">
              Skip the CAD work,{" "}
              <Text component="span" c="logoBlue" inherit>
                model for free
              </Text>
            </Title>
            <Text c="dimmed" size="xl" mb="sm">
              Remember to talk about how gear design is a rabbit hole and most people would benefit from a quick tool that just gives you what you need without cluttering you with 30 params you don't even now what they mean (note that you can also have them learn beyond the basics).
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Text>
            {/* <Group justify="center">
              <Button
                component={Link}
                href="/3d-generator"
                size="lg"
                rightSection={<IconArrowRight size={20} />}
              >
                Start 3D Generator
              </Button>
              <Button
                component={Link}
                href="/2d-generator"
                size="lg"
                variant="default"
              >
                Explore 2D Generator
              </Button>
            </Group> */}
          </Box>
        </Container>
      </Box>

      {/* GENERATOR CARDS SECTION (Symmetrical Zig-Zag) */}
      <Container size="lg" py="sm">
        {/* 3D Generator Card */}
        <Card withBorder shadow="sm" radius="md" p={0} mb={80}>
          <Grid align="stretch">
            {/* Image Side (Left) */}
            <Grid.Col span={{ base: 12, md: 6 }}>
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
                    [ 3D Generator Image / Interactive 3D model ]
                  </Text>
                </Box>
              </Box>
            </Grid.Col>

            {/* Text Side (Right) */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box p={{ base: "xl", md: 60 }}>
                <Title order={2} mb="md">
                  3D Gear Generator
                </Title>
                <Text c="dimmed" size="lg" mb="xl">
                  Talk about what the 3D generator specifically does. Mention customizing parameters like module, teeth count, pressure angle, and downloading to STL models for 3D printing in seconds. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Button
                  component={Link}
                  href="/3d-generator"
                  variant="light"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Get your own 3D Gears
                </Button>
              </Box>
            </Grid.Col>
          </Grid>
        </Card>

        {/* 2D Generator Card (Reversed for symmetry) */}
        <Card withBorder shadow="sm" radius="md" p={0}>
          <Grid align="stretch">
            {/* Text Side (Left) */}
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Box p={{ base: "xl", md: 60 }}>
                <Title order={2} mb="md">
                  2D Profile Generator
                </Title>
                <Text c="dimmed" size="lg" mb="xl">
                  Talk about its usefulness for laser cutting, CNC routing, or exact profile plotting, downloading DXFs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Button
                  component={Link}
                  href="/2d-generator"
                  variant="light"
                  rightSection={<IconArrowRight size={16} />}
                >
                  Generate 2D Profiles
                </Button>
              </Box>
            </Grid.Col>

            {/* Image Side (Right) */}
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
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
                    [ 2D Generator Image / DXF Preview ]
                  </Text>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>

      {/* THEORY & ABOUT CARDS (Supplemental usefulness below) */}


      <Container size="lg" pb={80} mt={{ base: 40, md: 80 }}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
          <Card withBorder shadow="sm" radius="md" p="xl">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="logoBlue">
                <IconBook size={24} />
              </ThemeIcon>
              <Title order={3} size="h4">Gear Theory & Mechanics</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Give a brief summary of why is there a theory section to begin with (struggles, awkward things when first designing gears, the rabbit hole). Let users know they can learn the math and engineering principles behind gear design. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Button component={Link} href="/theory" variant="subtle" px={0} rightSection={<IconArrowRight size={16} />}>
              Read the documentation
            </Button>
          </Card>

          <Card withBorder shadow="sm" radius="md" p="xl">
            <Group mb="md">
              <ThemeIcon size={40} radius="md" variant="light" color="sand">
                <IconInfoCircle size={24} color="var(--mantine-color-sand-9)" />
              </ThemeIcon>
              <Title order={3} size="h4">About STLGears.com</Title>
            </Group>
            <Text c="dimmed" mb="lg">
              Introduce your goals for the site. Share why you built this tool and who it's meant to help (makers, engineers, schools). Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Button component={Link} href="/about" variant="subtle" color="sand" px={0} rightSection={<IconArrowRight size={16} />}>
              Learn about the site
            </Button>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}