import { NumberInput } from "@mantine/core"
import { InputConfig } from "@/types/inputConfigs";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl"
import { UNITS } from "@/lib/common/constants";
import { baseGearInputProps, genericAngleInputConfig, genericDistanceInputConfig, genericNumericInputConfig } from "../base";

const HELIX_ANGLE_MIN = 5;
const HELIX_ANGLE_MAX = 45;

const LENGTH_MIN = 0.5;
const LENGTH_MAX = 400;

const MODULE_MIN = 0.3;
const MODULE_MAX = 75;

const NUMBER_OF_TEETH_MIN = 6;
const NUMBER_OF_TEETH_MAX = 150;

const PRESSURE_ANGLE_MIN = 14.5;
const PRESSURE_ANGLE_MAX = 35;


export const helicalSystemInputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        ...baseGearInputProps.helical_system,
        color: "slate.6",
        data: ['Normal', 'Radial'],
        defaultValue: "Normal",
    },
    helpText: `**Radial system** \n - Preserves the profile of the spur gear on the transverse plane. \n - Can't be manufactured through conventional methods.\n\n**Normal system**\n - Can be manufactured from a single hob cutter. \n - Tooth profile dimensions are different from the spur gear's.`,
    helpLink: {
        href: '/theory/module',
        label: 'Learn more'
    }
};

export const helixAngleInputConfig: InputConfig = {
    ...genericAngleInputConfig,
    inputProps: {
        ...baseGearInputProps.helix_angle,
        defaultValue: 15,
        min: HELIX_ANGLE_MIN,
        max: HELIX_ANGLE_MAX,
        allowDecimal: false,
    },
    helpImage: "/images/gears/inputs/helix_angle.svg",
    helpText: "- Typically from 15° to 30° in helical gears.\n\n- Double helical gears self cancel thrust; up to 45°.",
    helpLink: {
        href: '/',
        label: 'Learn more'
    },
};

export const moduleInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...baseGearInputProps.module,
        defaultValue: 1,
        min: MODULE_MIN,
        max: MODULE_MAX,
    },
    helpText: 'The module controls the size of the tooth and thus the total size of the gear.',
    helpImage: "/images/gears/inputs/module.svg",
    helpLink: {
        href: '/theory/module',
        label: 'Learn more'
    },
};

export const numberOfTeethInputConfig: InputConfig = {
    ...genericNumericInputConfig,
    inputProps: {
        ...baseGearInputProps.numer_of_teeth,
        defaultValue: 17,
        min: NUMBER_OF_TEETH_MIN,
        max: NUMBER_OF_TEETH_MAX,
        allowNegative: false,
    },
};

export const bevelPinpionNumberOfTeethInputConfig = {
    ...numberOfTeethInputConfig,
    inputProps: {
        ...numberOfTeethInputConfig.inputProps,
        ...baseGearInputProps.bevel_pinion,
    },
    helpText: "By convention, the Pinion is the smaller gear."
};

export const bevelWheelNumberOfTeethInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        ...numberOfTeethInputConfig.inputProps,
        ...baseGearInputProps.bevel_wheel,
    },
    helpText: "By convention, the Wheel is the larger gear."
};

export const lengthInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        ...baseGearInputProps.length,
        defaultValue: 10,
        placeholder: UNITS.milimiters,
        suffix: ' ' + UNITS.milimiters,
        min: LENGTH_MIN,
        max: LENGTH_MAX,
        decimalScale: 2,
        allowNegative: false,
    },
    helpImage: "/images/gears/inputs/spur_length.svg",
    helpText: "The distance between the gear's bottom and top face.",
};


export const doubleHelicalLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/double_helical_length.svg"
}

export const helicalLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/helical_length.svg"
}

export const helixDirectionInputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        ...baseGearInputProps.helix_direction,
        color: "slate.6",
        data: ['Clock wise', 'Counter clock wise'],
        defaultValue: "Clock wise",
    },
    helpText: "For paralel shaft helical gears to mesh, their helix angle must be equal in magnitude but opposite in direction."
};

export const pressureAngleInputConfig: InputConfig = {
    ...genericAngleInputConfig,
    inputProps: {
        ...baseGearInputProps.pressure_angle,
        defaultValue: 20,
        min: PRESSURE_ANGLE_MIN,
        max: PRESSURE_ANGLE_MAX,
    },
    helpText: 'The angle between the line of action and the tangent to the pitch circle, typically 20° or 25°.',
    helpImage: "/images/gears/inputs/pressure_angle.svg",
    helpLink: {
        href: '/',
        label: 'Learn more'
    },
};

export const profileShiftCoefficientInputConfig = {
    ...genericNumericInputConfig,
    inputProps: {
        ...baseGearInputProps.profile_shift_coefficient,
        defaultValue: 0,
        min: -1,
        max: 1,
        allowDecimal: true,
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

export const rackBaseHeightInputConfig = {
    ...lengthInputConfig,
    inputProps: {
        ...lengthInputConfig.inputProps,
        ...baseGearInputProps.rack_base_height,
    },
    helpImage: "/images/gears/inputs/rack_base_height.svg",
    helpText: "Distance between the base and the bottom of the teeth."
};

export const rackLengthInputConfig = {
    ...lengthInputConfig,
    helpImage: "/images/gears/inputs/rack_length.svg",
    helpText: "The rack's total number of teeth is in function of the length its base."
}

export const rackModuleInputConfig = {
    ...moduleInputConfig,
    helpImage: "/images/gears/inputs/rack_module.svg",
    helpText: "The module controls the distance from the bottom to the tip of the tooth."
}

export const rackNumberOfTeethInputConfig = {
    ...numberOfTeethInputConfig,
    helpImage: "/images/gears/inputs/rack_length.svg",
    helpText: "The rack's length is defined by the number of teeth."
}

export const rackPressureAngleInputConfig = {
    ...pressureAngleInputConfig,
    helpImage: "/images/gears/inputs/rack_pressure_angle.svg",
    helpText: "The pressure angle controls the inclinaction of the tooth\'s trapezoidal leg meassured from a line perpendicular to the base."
}

export const rackWidthInputConfig = {
    ...lengthInputConfig,
    inputProps: {
        ...lengthInputConfig.inputProps,
        ...baseGearInputProps.rack_width,
    },
    helpImage: "/images/gears/inputs/rack_width.svg",
    helpText: "Width of the rack\'s base."
};

export const radialThicknessInputConfig = {
    InputComponent: NumberInput,
    inputProps: {
        ...baseGearInputProps.radial_thickness,
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

