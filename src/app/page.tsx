import { Button, Group, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <div style={{ padding: '40px' }}>
      <Title order={1}>Mantine is G ready!</Title>
      <Group mt="md">
        <Button variant="filled">Filled Button</Button>
        <Button variant="outline">Outline Button</Button>
      </Group>
    </div>
  );
}