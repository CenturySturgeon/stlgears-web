import { NumberInput } from "@mantine/core"
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

// Validations might need to access the name of the input props
// best if I can centralize label and description while at it
// helpText and image are only for the input so no need to be here
export const baseGearInputProps = {
    bevel_pinion: {
        name: 'pinion_number_of_teeth',
        label: "Pinion's number of teeth",
    },
    bevel_wheel: {
        name: 'wheel_number_of_teeth',
        label: "Wheel's number of teeth",
    },
    helical_system: {
        name: 'helical_system',
        label: 'Helical system',
        description: 'Determines tooth profile on the transverse plane',
    },
    helix_angle: {
        name: 'helix_angle',
        label: 'Helix angle',
        description: 'The angle between the helix and the axis of rotation',
    },
    helix_direction: {
        name: 'helix_direction',
        label: "Helix direction",
        description: "Controls direction of the helix",
    },
    length: {
        name: 'length',
        label: 'Length',
        description: 'Length of the cylindrical face',
    },
    module: {
        name: 'module',
        label: 'Module',
        description: 'Controls tooth size',
    },
    numer_of_teeth: {
        name: 'number_of_teeth',
        label: 'Number of teeth',
    },
    pressure_angle: {
        name: 'pressure_angle',
        label: 'Pressure angle',
        description: 'Controls the line of action\'s inclination',
    },
    profile_shift_coefficient: {
        name: 'profile_shift_coefficient',
        label: 'Profile shift coefficient',
        description: 'Alters tooth geometry',
    },
    rack_base_height: {
        label: 'Base height',
        name: "base_height"
    },
    rack_width: {
        label: 'Base width',
        name: "base_width"
    },
    radial_thickness: {
        name: 'radial_thickness',
        label: 'Radial thickness',
    },
}

export const baseHoleTypeInputProps = {
    hole_type: {
        name: 'hole_type',
        label: 'Hole type'
    },
    none: {
        name: 'none',
        label: "None",
    },
    circular: {
        name: 'circular',
        label: 'Circular'
    },
    hexagonal: {
        name: 'hexagonal',
        label: 'Hexagonal'
    },
    square: {
        name: 'square',
        label: 'Square',
    },
    keyway: {
        name: 'keyway',
        label: 'Keyway'
    }
}

export const baseHoleInputProps = {
    circleRadius: {
        name: 'radius',
        label: 'Radius'
    },
    hexagonalCircumradius: {
        name: 'hexagonal_circumradius',
        label: 'Circumradius',
    },
    keywayBoreDiameter: {
        name: 'bore_diameter',
        label: 'Bore diameter',
    },
    keywayBoreDiameterPlusKeyLength: {
        name: 'bore_diameter_plus_key_height',
        label: 'Bore diameter + key length',
    },
    keywayKeyWidth: {
        name: 'key_width',
        label: 'Keyway key Width',
    },
    squareCircumradius: {
        name: 'square_circumradius',
        label: 'Circumradius',
    }
}
