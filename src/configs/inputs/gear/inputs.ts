import { NumberInput } from "@mantine/core"
import { InputConfig } from "@/types/inputConfigs";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl"
import { UNITS } from "@/lib/common/constants";
import { baseGearInputProps, genericAngleInputConfig, genericDistanceInputConfig, genericNumericInputConfig } from "../base";

export const gearInputsData = {
    helicalSystem: {
        data: ['Normal', 'Radial'],
    },
    helixAngle: {
        min: 5,
        max: 45,
    },
    helixDirection: {
        data: ['Clock wise', 'Counter clock wise'],
    },
    length: {
        min: 0.5,
        max: 400,
    },
    module: {
        min: 0.3,
        max: 75
    },
    numberOfTeeth: {
        min: 6,
        max: 150,
    },
    pressureAngle: {
        min: 14.5,
        max: 35
    },
    profileShiftCoefficient: {
        min: -1,
        max: 1
    },
    radialThickness: {
        min: 0.05,
        max: 200
    }
}

export const helicalSystemInputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        ...baseGearInputProps.helical_system,
        color: "slate.6",
        data: gearInputsData.helicalSystem.data,
        defaultValue: gearInputsData.helicalSystem.data[0],
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
        ...genericAngleInputConfig.inputProps,
        ...baseGearInputProps.helix_angle,
        defaultValue: 15,
        min: gearInputsData.helixAngle.min,
        max: gearInputsData.helixAngle.max,
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
        ...genericDistanceInputConfig.inputProps,
        ...baseGearInputProps.module,
        defaultValue: 1,
        min: gearInputsData.module.min,
        max: gearInputsData.module.max,
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
        min: gearInputsData.numberOfTeeth.min,
        max: gearInputsData.numberOfTeeth.max,
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
        min: gearInputsData.length.min,
        max: gearInputsData.length.max,
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
        data: gearInputsData.helixDirection.data,
        defaultValue: "Clock wise",
    },
    helpText: "For paralel shaft helical gears to mesh, their helix angle must be equal in magnitude but opposite in direction."
};

export const pressureAngleInputConfig: InputConfig = {
    ...genericAngleInputConfig,
    inputProps: {
        ...genericAngleInputConfig.inputProps,
        ...baseGearInputProps.pressure_angle,
        defaultValue: 20,
        min: gearInputsData.pressureAngle.min,
        max: gearInputsData.pressureAngle.max,
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
        min: gearInputsData.profileShiftCoefficient.min,
        max: gearInputsData.profileShiftCoefficient.max,
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
        min: gearInputsData.radialThickness.min,
        max: gearInputsData.radialThickness.max,
        decimalScale: 2,
        allowNegative: false,
    },
    helpImage: "/images/gears/inputs/radial_thickness.svg",
    helpText: "Distance between the root diameter (closest to the cylindrical face) and the outer diameter.",
};

