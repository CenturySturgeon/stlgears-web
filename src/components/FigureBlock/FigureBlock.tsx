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

            // 1. Hide requested elements
            hide.forEach(id => {
                const element = svgDoc.getElementById(id);
                if (element) {
                    (element as HTMLElement).style.display = 'none';
                }
            });

            // 2. Fix the inner SVG sizing and background natively
            const svgRoot = svgDoc.documentElement;
            if (svgRoot) {
                // Remove hardcoded physical dimensions so viewBox controls scaling
                svgRoot.removeAttribute('width');
                svgRoot.removeAttribute('height');

                // Force it to fill the object container
                svgRoot.style.width = '100%';
                svgRoot.style.height = '100%';

                // Ensure the SVG itself has a transparent background
                svgRoot.style.backgroundColor = 'transparent';
            }
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
        backgroundColor: 'white',
        maxHeight: '40vh',
        // Remember to emove backgroundColor: 'white' to allow transparency if you ever get that issue
        borderRadius: 'var(--mantine-radius-md)',
        // Added flex properties to strictly contain the object child
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    };

    return (
        <Box my="xl">
            <Text c="dimmed" size="sm" mb="xs">
                Figure {index}
            </Text>

            {hide.length === 0 ? (
                <Image
                    src={path}
                    alt={description}
                    radius="md"
                    fit="contain"
                    style={containerStyles}
                />
            ) : (
                <Box style={containerStyles}>
                    <object
                        ref={objectRef}
                        data={path}
                        type="image/svg+xml"
                        style={{
                            width: '100%',     // Added to prevent horizontal overflow
                            maxHeight: '40vh', // Ensures it respects the parent's max height constraint
                            display: 'block',
                            background: 'transparent',
                            objectFit: 'contain',
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