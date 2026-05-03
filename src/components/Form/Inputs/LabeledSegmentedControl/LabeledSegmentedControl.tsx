'use client';

import {
    SegmentedControl,
    Input,
    type SegmentedControlProps,
    type InputWrapperProps,
} from '@mantine/core';

type LabeledSegmentedControlProps = SegmentedControlProps &
    InputWrapperProps;

export default function LabeledSegmentedControl({
    label,
    description,
    error,
    required,
    ...segmentedProps
}: LabeledSegmentedControlProps) {
    return (
        <Input.Wrapper
            label={label}
            description={description}
            error={error}
            required={required}
            style={{ width: '100%' }}
        >
            <div style={{ marginTop: 'calc(var(--mantine-spacing-xs) / 2)', width: '100%' }}>
                <SegmentedControl {...segmentedProps} />
            </div>
        </Input.Wrapper>
    );
}