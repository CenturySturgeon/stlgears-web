"use client";

import { Box, Text, Image } from '@mantine/core';
import { useEffect, useRef } from 'react';

interface FigureBlockProps {
    index: number;
    description: string;
    path: string;
    hide?: string[];
}

export default function FigureBlock({ index, description, path, hide = [] }: FigureBlockProps) {
    const objectRef = useRef<HTMLObjectElement>(null);

    useEffect(() => {
        if (!objectRef.current || hide.length === 0) return;

        const objectElement = objectRef.current;
        const onLoad = () => {
            const svgDoc = objectElement.contentDocument;
            if (!svgDoc) return;

            hide.forEach(id => {
                const element = svgDoc.getElementById(id);
                if (element) {
                    (element as HTMLElement).style.display = 'none';
                }
            });
        };

        if (objectElement.contentDocument?.readyState === 'complete') {
            onLoad();
        } else {
            objectElement.addEventListener('load', onLoad);
            return () => objectElement.removeEventListener('load', onLoad);
        }
    }, [hide, path]);

    const containerStyles = {
        border: '1px solid var(--mantine-color-gray-3)',
        maxWidth: '100%',
        maxHeight: '40vh',
        backgroundColor: 'white',
        borderRadius: 'var(--mantine-radius-md)',
    };

    return (
        <Box my="xl">
            <Text c="dimmed" size="sm" mb="xs">
                Figure {index}
            </Text>

            {hide.length === 0 ? (
                // Use Image for static SVGs and images (no hiding needed)
                <Image
                    src={path}
                    alt={description}
                    radius="md"
                    fit="contain"
                    style={containerStyles}
                />
            ) : (
                // Use object for dynamic SVGs (hiding elements)
                <Box style={containerStyles}>
                    <object
                        ref={objectRef}
                        data={path}
                        type="image/svg+xml"
                        style={{
                            height: '100%',
                            display: 'block',
                            margin: '0 auto', // Centers the object horizontally
                            background: 'transparent',
                            objectFit: 'contain', // Ensures aspect ratio is preserved
                        }}
                        aria-label={description}
                    />
                </Box>
            )}

            <Text
                c="dimmed"
                size="xs"
                ta="center"
                mt="xs"
                style={{ fontStyle: 'italic', display: 'block' }}
            >
                {description}
            </Text>
        </Box>
    );
}