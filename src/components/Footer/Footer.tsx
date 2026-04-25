'use client';

import classes from './Footer.module.css';
import { Container, Group, Text, Anchor, Stack, Divider } from '@mantine/core';
import { SITE_CONFIG } from '@/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container size="md">
        <Divider mb="xl" color="slate.1" />
        <Group justify="space-between" className={classes.inner}>
          <Stack gap={4}>
            <Text size="sm" fw={600} style={{ color: 'var(--mantine-color-logoBlue-7)' }}>
              {SITE_CONFIG.name}
            </Text>
            <Text size="xs" color="slate.5">
              © {currentYear} All rights reserved.
            </Text>
          </Stack>

          <Group gap="lg">
            <Anchor
              href={SITE_CONFIG.documents.privacy}
              target="_blank"
              size="sm"
              className={classes.link}
            >
              Privacy Policy
            </Anchor>

            <Anchor
              href={SITE_CONFIG.documents.cookies}
              target="_blank"
              size="sm"
              className={classes.link}
            >
              Cookies Policy
            </Anchor>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}