'use client';

import classes from './Header.module.css';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config';
import { Image, Group, Button, UnstyledButton, Menu, Container, Burger, Text, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

type TheoryLink = {
  label: string;
  href: string;
};

export function Header({ theoryLinks = [] }: { theoryLinks?: TheoryLink[] }) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
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
              {/* 3. Map over the sorted links */}
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
  );
}