import { NumberInput } from "@mantine/core"

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