'use client';

import { Box, Group, Text, Tooltip, CopyButton, ActionIcon } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface EquationProps {
  number: number;
  formula: string;
  description: string;
  copyText: string;
}

export default function EquationBlock({ number, formula, description, copyText }: EquationProps) {
  return (
    <Box 
      my="xl" 
      p="md" 
      style={{ 
        borderRadius: 'var(--mantine-radius-md)', 
        border: '1px solid var(--mantine-color-slate-3)' 
      }}
    >
      <Group align="flex-start" justify="space-between">
        <Box>
          <Text size="sm" c="dimmed" mb="xs" fw={500}>
            Equation {number}
          </Text>
          
          <Tooltip label={description} multiline w={300} withArrow position="bottom-start">
            <Box style={{ cursor: 'help' }}>
              {/* Safe, native rendering without dangerouslySetInnerHTML */}
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {`$$${formula}$$`}
              </ReactMarkdown>
            </Box>
          </Tooltip>
        </Box>

        <CopyButton value={copyText} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied!' : 'Copy clean math'} withArrow position="left">
              <ActionIcon 
                color={copied ? 'teal' : 'logoBlue'} 
                variant="subtle" 
                onClick={copy}
                aria-label="Copy equation"
              >
                {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Box>
  );
}