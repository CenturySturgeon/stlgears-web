'use client';

import { Modal, Text } from '@mantine/core';

type CustomizeModalProps = {
  opened: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode; // for dynamic content
};

export default function FormModal({
  opened,
  onClose,
  title,
  children,
}: CustomizeModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={title}
      centered
    >
      {children ?? (
        <Text size="sm">
          Modal content for "{title}" goes here.
        </Text>
      )}
    </Modal>
  );
}