import { NumberInput } from "@mantine/core"

export const moduleInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        label: 'Module',
        description: 'Controls tooth size',
        defaultValue: 1,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.3,
        max: 75,
        decimalScale: 2,
    },
    helpText: 'Your public name',
    helpImage: "/images/gears/inputs/module.svg",
    helpLink: {
        href: '/',
        label: 'Learn more'
    }
};

export const pressureAngleInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        label: 'Pressure angle',
        description: 'Controls the line of action\'s inclination',
        defaultValue: 20,
        placeholder: '°',
        suffix: ' °',
        min: 14.5,
        max: 35,
        decimalScale: 1,
    },
    helpText: 'Your public name',
    helpImage: "/images/gears/inputs/pressure_angle.svg",
    helpLink: {
        href: '/',
        label: 'Learn more'
    }
};

export const numberOfTeethInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        label: 'Number of teeth',
        defaultValue: 17,
        min: 1,
        max: 150,
        allowDecimal: false,
    },
};

export const lengthInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        label: 'Length',
        description: 'Length of the cylindrical face',
        defaultValue: 10,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.05,
        max: 400,
        decimalScale: 2,
    },
    helpImage: "/images/gears/inputs/spur_length.svg",
    helpLink: {
        href: '/',
        label: 'Learn more'
    }
};