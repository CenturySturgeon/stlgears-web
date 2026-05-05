'use client';

import ReactMarkdown from 'react-markdown';
import { Anchor, Box, Group, HoverCard, Image, List, Stack, Text } from '@mantine/core';
import { IconHelpCircle } from '@tabler/icons-react';
import ButtonLink from '@/components/ButtonLink/ButtonLink';

type HoverCardInputProps = {
  InputComponent: React.ComponentType<any>;
  inputProps: any;
  helpText?: string;
  helpImage?: string;
  helpLink?: {
    href: string;
    label: string;
  };
};

const HELP_ICON_WIDTH = 18;

export default function HoverCardInput({
  InputComponent,
  inputProps,
  helpText,
  helpImage,
  helpLink,
}: HoverCardInputProps) {
  return (
    <Group align="stretch" gap="xs" wrap="nowrap">
      <InputComponent {...inputProps} style={{ flex: 1 }} />
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          width: HELP_ICON_WIDTH
        }}>
        {
          (helpText || helpImage) && (
            <HoverCard width={280} shadow="md" withArrow>
              <HoverCard.Target>
                <IconHelpCircle
                  size={HELP_ICON_WIDTH}
                  style={{ cursor: 'pointer', opacity: 0.7 }}
                />
              </HoverCard.Target>

              <HoverCard.Dropdown>
                <Stack gap="xs">
                  {helpImage && (
                    <Image
                      fit="contain"
                      mah="150px"
                      src={helpImage}
                      alt="help"
                      radius="sm"
                      style={{
                        backgroundColor: 'white'
                      }}
                    />
                  )}

                  {helpText && (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <Text size="sm">{children}</Text>,
                        ul: ({ children }) => (
                          <List size="sm" spacing={4}>
                            {children}
                          </List>
                        ),
                        ol: ({ children }) => (
                          <List size="sm" spacing={4} type="ordered">
                            {children}
                          </List>
                        ),

                        li: ({ children }) => <List.Item>{children}</List.Item>,
                        a: ({ href, children }) => (
                          <Anchor href={href} size="sm" target="_blank">
                            {children}
                          </Anchor>
                        ),
                      }}
                    >
                      {helpText}
                    </ReactMarkdown>
                  )}
                  {helpLink && (
                    <ButtonLink href={helpLink.href} size="xs" variant="light">
                      {helpLink.label}
                    </ButtonLink>
                  )}
                </Stack>
              </HoverCard.Dropdown>
            </HoverCard>
          )}
      </Box>
    </Group>
  );
}