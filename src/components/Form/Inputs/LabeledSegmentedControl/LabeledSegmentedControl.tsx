'use client';

import {
    SegmentedControl,
    Input,
    type SegmentedControlProps,
    type InputWrapperProps,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type LabeledSegmentedControlProps = SegmentedControlProps & InputWrapperProps;

export default function LabeledSegmentedControl({
    label,
    description,
    error,
    required,
    ...segmentedProps
}: LabeledSegmentedControlProps) {
    const isMobile = useMediaQuery('(max-width: 810px)');

    return (
        <Input.Wrapper
            label={label}
            description={description}
            error={error}
            required={required}
            style={{ width: '100%' }}
        >
            <div style={{ marginTop: 'calc(var(--mantine-spacing-xs) / 2)', width: '100%' }}>
                <SegmentedControl
                    fullWidth={true}
                    styles={{
                        root: {
                            flexWrap: isMobile ? 'wrap' : 'nowrap',
                            gap: '0.5rem',
                            width: '100%',
                            overflow: 'visible',
                        }
                    }}
                    {...segmentedProps}
                />
            </div>
        </Input.Wrapper>
    );
}