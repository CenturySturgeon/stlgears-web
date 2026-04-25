'use client';

import classes from './Header.module.css';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config';
import { Group, Button, UnstyledButton, Menu, Container, Burger, Text, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container size="md" h="100%">
      <Group justify="space-between" h="100%">
        {/* Left: Logo */}
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Group gap="xs">
            <Box bg="logoBlue.6" w={30} h={30} style={{ borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>G</Box>
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

          {/* Theory - Desktop: Menu / Mobile: Link (Logic handled via visibility) */}
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
              <Menu.Item component={Link} href="/theory/basics">Basics</Menu.Item>
              <Menu.Item component={Link} href="/theory/advanced">Advanced</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>

        {/* Right: External Blog Button */}
        <Group>
          <Button
            component="a"
            href="https://yourblog.com"
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