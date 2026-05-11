import { InputWrapperProps, NumberInput, type SegmentedControlProps } from '@mantine/core';

// Base type for all input configs
export type BaseHoverCardInputProps<T> = {
    InputComponent: React.ComponentType<T>;
    inputProps: T & {
        name: string;
        label: string;
    };
    helpText?: string;
    helpImage?: string;
    helpLink?: {
        href: string;
        label: string;
    };
    // Optional function to determine visibility based on form state
    showWhen?: (values: Record<string, any>) => boolean;
    // For Mantine's form validation
    validate?: (value: any) => string | null;
};

export type NumberInputConfig = BaseHoverCardInputProps<React.ComponentProps<typeof NumberInput>>;

type LabeledSegmentedControlProps = SegmentedControlProps & InputWrapperProps;

export type LabeledSegmentedControlConfig = BaseHoverCardInputProps<LabeledSegmentedControlProps>;

export type InputConfig = LabeledSegmentedControlConfig | NumberInputConfig;