import React from 'react';
import { NumberInput, Select } from "@mantine/core"
import { IconCaretDownFilled } from "@tabler/icons-react";
import { ReactElement } from 'react';

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
    helpText: 'The module controls the size of the tooth and thus the total size of the gear.',
    helpImage: "/images/gears/inputs/module.svg",
    helpLink: {
        href: '/theory/module',
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
    helpText: 'The pressure angle is the angle between the line of action and the tangent to the pitch circle, typically 20 or 25 degrees.',
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

export const helicalSystemInputConfig = {
    InputComponent: Select,
    inputProps: {
        label: 'Helical system',
        description: 'Determines tooth profile on the transverse plane',
        data: ['Normal', 'Radial'],
        defaultValue: "Normal",
        rightSection: React.createElement(IconCaretDownFilled, { size: 16 }) as ReactElement,
    },
    helpText: "The radial system preserves the profile of the spur gear on the transverse plane, but can't be manufactured through conventional methods.",
    helpLink: {
        href: '/theory/module',
        label: 'Learn more'
    }
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
    helpText: "The distance between the gear's bottom and top face."
};

export const radialThicknessInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        label: 'Radial thickness',
        defaultValue: 10,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.05,
        max: 400,
        decimalScale: 2,
    },
    helpImage: "/images/gears/inputs/radial_thickness.svg",
    helpText: "Distance between the root diameter (closest to the cylindrical face) and the outer diameter.",
};

export const doubleHelicalLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/double_helical_length.svg"
}
export const helicalLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/helical_length.svg"
}

export const rackModuleInputConfig = {
    ...moduleInputConfig,
    helpImage: "/images/gears/inputs/rack_module.svg",
    helpText: "The module controls the distance from the bottom to the tip of the tooth."
}

export const rackPressureAngleInputConfig = {
    ...pressureAngleInputConfig,
    helpImage: "/images/gears/inputs/rack_pressure_angle.svg",
    helpText: "The pressure angle controls the inclinaction of the tooth\'s trapezoidal leg meassured from a line perpendicular to the base."
}

export const rackNumberOfTeethInputConfig = {
    ...numberOfTeethInputConfig,
    helpImage: "/images/gears/inputs/rack_length.svg",
    helpText: "The rack's length is defined by the number of teeth."
}

export const rackLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/rack_length.svg",
    helpText: "The rack's total number of teeth is in function of the length its base."
}

export const rackWidthInputConfig = {
    ...lengthInputConfig,
    inputProps: { ...lengthInputConfig.inputProps, label: 'Base width' },
    helpImage: "/images/gears/inputs/rack_width.svg",
    helpText: "Width of the rack\'s base."
};

export const rackBaseHeightInputConfig = {
    ...lengthInputConfig,
    inputProps: { ...lengthInputConfig.inputProps, label: 'Base height' },
    helpImage: "/images/gears/inputs/rack_base_height.svg",
    helpText: "Distance between the base and the bottom of the teeth."
};
