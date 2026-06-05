import { useRef, useState } from 'react';
import {
  IconCloudUpload,
  IconDownload,
  IconX,
  IconCopy,
  IconCheck,
} from '@tabler/icons-react';
import {
  Button,
  Group,
  Text,
  useMantineTheme,
  Modal,
  Table,
  ActionIcon,
  Tooltip,
  CopyButton,
} from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useDisclosure } from '@mantine/hooks';
import classes from './DropzoneButton.module.css';

export function DropzoneButton() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [fileContent, setFileContent] = useState<string>('');
  const [fileName, setFileName] = useState('');

  const handleDrop = (files: File[]) => {
    const file = files[0];
    setFileName(file.name);

    if (!file.name.toLowerCase().endsWith('.stl')) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;
      const first20Chars = content.substring(0, 20);

      setFileContent(first20Chars);
      open();
    };

    reader.readAsText(file);
  };

  const generateCSV = () => {
    const rows = fileContent
      .split('')
      .map((char, index) => `${index + 1},${char}`);

    return ['Position,Character', ...rows].join('\n');
  };

  const downloadCSV = () => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;

    const baseName = fileName
      ? fileName.replace(/\.stl$/i, '')
      : 'gear';

    link.download = `${baseName}-params.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const csvContent = generateCSV();

  const rows = fileContent.split('').map((char, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{char}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className={classes.wrapper}>
        <Dropzone
          openRef={openRef}
          className={classes.dropzone}
          radius="md"
          accept={['model/stl']}
          maxFiles={1}
          aria-label="Drop STL file here"
          onDrop={handleDrop}
        >
          <div style={{ pointerEvents: 'none' }}>
            <Group justify="center">
              <Dropzone.Accept>
                <IconDownload
                  size={50}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>

              <Dropzone.Reject>
                <IconX
                  size={50}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </Dropzone.Reject>

              <Dropzone.Idle>
                <IconCloudUpload
                  size={50}
                  stroke={1.5}
                  className={classes.icon}
                />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop STL gear here</Dropzone.Accept>
              <Dropzone.Reject>Only .stl files accepted</Dropzone.Reject>
              <Dropzone.Idle>Analyze gear</Dropzone.Idle>
            </Text>

            <Text className={classes.description}>
              Drag&apos;n&apos;drop your STL gear here to get its params. We can
              accept only .stl files that were generated with
              STLGears.com
            </Text>
          </div>
        </Dropzone>

        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={() => openRef.current?.()}
        >
          Select file
        </Button>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        title="Gear params"
      >
        <Group justify="space-between" mb="md">

          <CopyButton value={csvContent} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied!' : 'Copy table as CSV'}
                withArrow
                position="left"
              >
                <ActionIcon
                  color={copied ? 'teal' : 'blue'}
                  variant="light"
                  size="lg"
                  onClick={copy}
                  aria-label="Copy CSV"
                >
                  {copied ? (
                    <IconCheck size={18} />
                  ) : (
                    <IconCopy size={18} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>

          <Button
            leftSection={<IconDownload size={16} />}
            variant='light'
            color='blue'
            size="sm"
            onClick={downloadCSV}
          >
            Download CSV
          </Button>
          
        </Group>

        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Position</Table.Th>
              <Table.Th>Character</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Modal>
    </>
  );
}