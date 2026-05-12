import { NumberInput } from "@mantine/core"
import { InputConfig } from "@/types/inputConfigs";
import { UNITS } from "@/lib/common/constants";

export const genericAngleInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'generic',
        label: 'generic',
        placeholder: UNITS.degrees,
        suffix: ' ' + UNITS.degrees,
        decimalScale: 1,
        allowNegative: false,
    },
};

export const genericDistanceInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'generic',
        label: 'generic',
        placeholder: UNITS.milimiters,
        suffix: ' ' + UNITS.milimiters,
        decimalScale: 2,
        allowNegative: false,
    },
};

export const genericNumericInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'generic',
        label: 'generic',
        allowDecimal: false,
        allowNegative: true,
    },
};