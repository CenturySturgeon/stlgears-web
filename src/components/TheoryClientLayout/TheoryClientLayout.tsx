"use client";

import { Box, Grid, TableOfContents } from '@mantine/core';
import React from 'react';

export default function TheoryClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <Grid>
            {/* Left Column: Markdown Content */}
            <Grid.Col span={{ base: 12, md: 10 }}>
                {/* The ID here is critical for scrollSpyOptions to find headings */}
                <div id="mdx">
                    {children}
                </div>
            </Grid.Col>

            {/* Right Column: Sticky Table of Contents */}
            {/* Hidden on mobile, shown on medium screens and up */}
            <Grid.Col span={{ base: 12, md: 2 }} display={{ base: 'none', md: 'block' }}>
                <Box pos="sticky" top={80} style={{ alignSelf: 'flex-start' }}>
                    <TableOfContents
                        variant="light"
                        color="blue"
                        size="xs"
                        radius="md"
                        autoContrast={true}
                        scrollSpyOptions={{
                            selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
                        }}
                        getControlProps={({ data }) => ({
                            onClick: () => data.getNode().scrollIntoView(),
                            children: data.value,
                        })}
                    />
                </Box>
            </Grid.Col>
        </Grid>
    );
}