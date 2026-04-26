'use client';

import classes from './Header.module.css';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config';
import { Accordion, Box, Button, Burger, Container, Drawer, Group, Image, Menu, NavLink, Stack, Text, UnstyledButton, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconHome, IconTools, IconBook, IconInfoCircle, IconNews } from '@tabler/icons-react';

type TheoryLink = {
  label: string;
  href: string;
};

export function Header({ theoryLinks = [] }: { theoryLinks?: TheoryLink[] }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Container size="lg" h="100%">
        <Group justify="space-between" h="100%">
          {/* Left: Logo */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs">
              <Box
                w={50}
                h={50}
                style={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </Box>
              <Text fw={700} size="lg">{SITE_CONFIG.name}</Text>
            </Group>
          </Link>

          {/* Center: Navigation Links */}
          <Group gap={5} visibleFrom="sm">
            <UnstyledButton component={Link} href="/" className={classes.link}>Home</UnstyledButton>

            {/* Generators - Menu */}
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <UnstyledButton className={classes.link}>
                  <Group gap={5}>
                    <span>Generators</span>
                    <IconChevronDown size={14} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component={Link} href="/generators/one">Generator One</Menu.Item>
                <Menu.Item component={Link} href="/generators/two">Generator Two</Menu.Item>
              </Menu.Dropdown>
            </Menu>

            {/* Theory - Dynamically Mapped */}
            <Menu trigger="hover" openDelay={100} closeDelay={400}>
              <Menu.Target>
                <UnstyledButton component={Link} href="/theory" className={classes.link}>
                  <Group gap={5}>
                    <span>Theory</span>
                    <IconChevronDown size={14} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                {theoryLinks.length > 0 ? (
                  theoryLinks.map((link) => (
                    <Menu.Item key={link.href} component={Link} href={link.href}>
                      {link.label}
                    </Menu.Item>
                  ))
                ) : (
                  <Menu.Item disabled>No theories yet</Menu.Item>
                )}
              </Menu.Dropdown>
            </Menu>

            {/* About */}
            <UnstyledButton component={Link} href="/about" className={classes.link}>About</UnstyledButton>
          </Group>

          {/* Right: External Blog Button */}
          <Group>
            <Button
              component="a"
              href={SITE_CONFIG.socials.kofi}
              target="_blank"
              variant="outline"
              visibleFrom="sm"
            >
              Blog
            </Button>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          </Group>
        </Group>
      </Container>

      <Drawer
        opened={opened}
        onClose={toggle}
        padding="md"
        title={
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="xs">
              <Box
                w={40}
                h={40}
                style={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Box>
              <Text fw={700} size="lg">{SITE_CONFIG.name}</Text>
            </Group>
          </Link>
        }
      >
        <Stack gap="xs">
          {/* Home */}
          <NavLink
            component={Link}
            href="/"
            label="Home"
            leftSection={<IconHome style={{ width: rem(20), height: rem(20) }} />}
            onClick={toggle}
            className={classes.mobileNavLink}
          />

          {/* Generators */}
          <Accordion variant="unstyled" chevronPosition="right" className={classes.mobileAccordion}>
            <Accordion.Item value="generators" className={classes.mobileAccordionItem}>
              <Accordion.Control icon={<IconTools style={{ width: rem(20), height: rem(20) }} />}>
                <Text className={classes.mobileAccordionLabel}>Generators</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap={2}>
                  <NavLink
                    component={Link}
                    href="/generators/one"
                    label="Generator One"
                    onClick={toggle}
                    className={classes.mobileNavLink}
                  />
                  <NavLink
                    component={Link}
                    href="/generators/two"
                    label="Generator Two"
                    onClick={toggle}
                    className={classes.mobileNavLink}
                  />
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          {/* Theory */}
          <Accordion variant="unstyled" chevronPosition="right" className={classes.mobileAccordion}>
            <Accordion.Item value="theory" className={classes.mobileAccordionItem}>
              <Accordion.Control icon={<IconBook style={{ width: rem(20), height: rem(20) }} />}>
                <Text className={classes.mobileAccordionLabel}>Theory</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Stack gap={2}>
                  {theoryLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      component={Link}
                      href={link.href}
                      label={link.label}
                      onClick={toggle}
                      className={classes.mobileNavLink}
                    />
                  ))}
                </Stack>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          {/* About */}
          <NavLink
            component={Link}
            href="/about"
            label="About"
            leftSection={<IconInfoCircle style={{ width: rem(20), height: rem(20) }} />}
            onClick={toggle}
            className={classes.mobileNavLink}
          />

          {/* kofi */}
          <Button
            component="a"
            href={SITE_CONFIG.socials.kofi}
            target="_blank"
            justify='left'
            variant="outline"
            fullWidth
            leftSection={<IconNews style={{ width: rem(20), height: rem(20) }} />}
            onClick={toggle}
            mt="md"
          >
            Blog
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}