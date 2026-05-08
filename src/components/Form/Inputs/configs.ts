import { NumberInput } from "@mantine/core"
import { InputConfig } from "@/types/inputConfigs";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl"

export const moduleInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'module',
        label: 'Module',
        description: 'Controls tooth size',
        defaultValue: 1,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.3,
        max: 75,
        decimalScale: 2,
        allowNegative: false,
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
        name: 'pressure_angle',
        label: 'Pressure angle',
        description: 'Controls the line of action\'s inclination',
        defaultValue: 20,
        placeholder: '°',
        suffix: ' °',
        min: 14.5,
        max: 35,
        decimalScale: 1,
        allowNegative: false,
    },
    helpText: 'The angle between the line of action and the tangent to the pitch circle, typically 20° or 25°.',
    helpImage: "/images/gears/inputs/pressure_angle.svg",
    helpLink: {
        href: '/',
        label: 'Learn more'
    }
};

export const helixAngleInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'helix_angle',
        label: 'Helix angle',
        description: 'The angle between the helix and the axis of rotation',
        defaultValue: 15,
        placeholder: '°',
        suffix: ' °',
        min: 5,
        max: 45,
        allowDecimal: false,
        allowNegative: false,
    },
    helpImage: "/images/gears/inputs/helix_angle.svg",
    helpText: "- Typically from 15° to 30° in helical gears.\n\n- Double helical gears self cancel thrust; up to 45°.",
    helpLink: {
        href: '/',
        label: 'Learn more'
    }
};

export const numberOfTeethInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'number_of_teeth',
        label: 'Number of teeth',
        defaultValue: 17,
        min: 1,
        max: 150,
        allowDecimal: false,
        allowNegative: false,
    },
};

export const profileShiftCoefficientInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'profile_shift_coefficient',
        label: 'Profile shift coefficient',
        description: 'Controls tooth size',
        defaultValue: 0,
        min: -1,
        max: 1,
        decimalScale: 2,
        allowNegative: true,
    },
    helpText: "Controls the offset of the cutter when fabricating the gear, it affects core dimensions so it can be used to modify distance between centers without changing the module.",
    helpImage: "/images/gears/inputs/profile_shifting.svg",
    helpLink: {
        href: '/theory/module',
        label: 'Learn more'
    }
};

export const bevelPinpionNumberOfTeethInputConfig = {
    ...numberOfTeethInputConfig,
    inputProps: {
        ...numberOfTeethInputConfig.inputProps,
        name: 'pinion_number_of_teeth',
        label: "Pinion's number of teeth",
    },
    helpText: "By convention, the Pinion is the smaller gear."
};

export const bevelWheelNumberOfTeethInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        ...numberOfTeethInputConfig.inputProps,
        name: 'wheel_number_of_teeth',
        label: "Wheel's number of teeth",
    },
    helpText: "By convention, the Wheel is the larger gear."
};

export const helicalSystemInputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        name: 'helical_system',
        color: "slate.6",
        label: 'Helical system',
        description: 'Determines tooth profile on the transverse plane',
        data: ['Normal', 'Radial'],
        defaultValue: "Normal",
    },
    helpText: `**Radial system** \n - Preserves the profile of the spur gear on the transverse plane. \n - Can't be manufactured through conventional methods.\n\n**Normal system**\n - Can be manufactured from a single hob cutter. \n - Tooth profile dimensions are different from the spur gear's.`,
    helpLink: {
        href: '/theory/module',
        label: 'Learn more'
    }
};

export const lengthInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'length',
        label: 'Length',
        description: 'Length of the cylindrical face',
        defaultValue: 10,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.05,
        max: 400,
        decimalScale: 2,
        allowNegative: false,
    },
    helpImage: "/images/gears/inputs/spur_length.svg",
    helpText: "The distance between the gear's bottom and top face."
};

export const radialThicknessInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'radial_thickness',
        label: 'Radial thickness',
        defaultValue: 10,
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.05,
        max: 400,
        decimalScale: 2,
        allowNegative: false,
    },
    helpImage: "/images/gears/inputs/radial_thickness.svg",
    helpText: "Distance between the root diameter (closest to the cylindrical face) and the outer diameter.",
};

export const helixDirectionInputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        name: 'helix_direction',
        color: "slate.6",
        label: "Helix direction",
        description: "Controls direction of the helix",
        data: ['Clock wise', 'Counter clock wise'],
        defaultValue: "Clock wise",
    },
    helpText: "For paralel shaft helical gears to mesh, their helix angle must be equal in magnitude but opposite in direction."
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
    inputProps: { ...lengthInputConfig.inputProps, label: 'Base width', name: "base_width" },
    helpImage: "/images/gears/inputs/rack_width.svg",
    helpText: "Width of the rack\'s base."
};

export const rackBaseHeightInputConfig = {
    ...lengthInputConfig,
    inputProps: { ...lengthInputConfig.inputProps, label: 'Base height', name: "base_height" },
    helpImage: "/images/gears/inputs/rack_base_height.svg",
    helpText: "Distance between the base and the bottom of the teeth."
};


const genericDistanceInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        name: 'generic',
        label: 'generic',
        placeholder: 'mm',
        suffix: ' mm',
        min: 0.1,
        decimalScale: 2,
    },
};

export const radiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'radius',
        label: 'Radius',
    },
    helpImage: "/images/gears/holes/radius.svg",
};

export const hexagonalCircumradiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'circumradius',
        label: 'Circumradius'
    },
    helpImage: "/images/gears/holes/hexagonal_circumradius.svg",
    helpText: "The distance from the center to one of the hexagon's vertices."
}

export const squareCircumradiusInputConfig = {
    ...hexagonalCircumradiusInputConfig,
    helpImage: "/images/gears/holes/square_circumradius.svg",
    helpText: "The distance from the center to one of the square's vertices."
}

export const keywayBoreDiameterInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'bore_diameter',
        label: 'Bore diameter',
    },
    helpImage: "/images/gears/holes/keyway_bore.svg",
    helpText: "Diameter for the cylindrical portion of the keyway.",
}

export const keywayKeyWidthInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'key_width',
        label: 'Keyway key Width',
    },
    helpImage: "/images/gears/holes/keyway_key_width.svg",
    helpText: "The distance between the two paralel faces of the key."
}

export const keywayBoreDiameterPlusKeyHeightInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'bore_diameter_plus_key_height',
        label: 'Bore + Key height',
    },
    helpImage: "/images/gears/holes/keyway_bore_plus_key.svg",
    helpText: "Nominal length of the keyway, measured from the center of the key's top to the bore diameter."
};

const segmentedControlInputConfig: InputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        name: "holeType",
        label: "Hole Type",
        data: [
            { label: 'None', value: 'none' },
            { label: 'Hexagonal', value: 'hexagonal' },
            { label: 'Circular', value: 'circular' },
            { label: 'Keyway', value: 'keyway' },
        ],
        color: "slate.6",
        defaultValue: 'none',
    },
};

export const holeInputConfigs: InputConfig[] = [
    segmentedControlInputConfig,
    {
        ...radiusInputConfig,
        showWhen: (values) => values.holeType === 'circular',
    },
    {
        ...hexagonalCircumradiusInputConfig,
        showWhen: (values) => values.holeType === 'hexagonal',
    },
    {
        ...keywayBoreDiameterInputConfig,
        showWhen: (values) => values.holeType === 'keyway',
    },
    {
        ...keywayBoreDiameterPlusKeyHeightInputConfig,
        showWhen: (values) => values.holeType === 'keyway',
    },
    {
        ...keywayKeyWidthInputConfig,
        showWhen: (values) => values.holeType === 'keyway',
    },
];