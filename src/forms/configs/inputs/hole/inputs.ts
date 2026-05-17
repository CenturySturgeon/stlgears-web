import { InputConfig } from "@/types/inputConfigs";
import { baseHoleInputProps, baseHoleTypeInputProps, createConditionalInputConfigs, genericDistanceInputConfig } from "@/forms/configs/inputs/base";

export const HOLES_MIN_DISTANCE = 0.5;
export const HOLES_MAX_DISTANCE = 400;
export const DEFAULT_RADIUS_VALUE = 5;

const radiusInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: baseHoleInputProps.circleRadius.name,
        label: baseHoleInputProps.circleRadius.label,
        defaultValue: DEFAULT_RADIUS_VALUE,
    },
    helpImage: "/images/gears/holes/radius.svg",
};

const hexagonalCircumradiusInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.hexagonalCircumradius,
        name: baseHoleInputProps.hexagonalCircumradius.name,
        label: baseHoleInputProps.hexagonalCircumradius.label,
        defaultValue: DEFAULT_RADIUS_VALUE,
    },
    helpImage: "/images/gears/holes/hexagonal_circumradius.svg",
    helpText: "The distance from the center to one of the hexagon's vertices.",
};

const squareCircumradiusInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.squareCircumradius,
        name: baseHoleInputProps.squareCircumradius.name,
        label: baseHoleInputProps.squareCircumradius.label,
    },
    helpImage: "/images/gears/holes/square_circumradius.svg",
    helpText: "The distance from the center to one of the square's vertices.",
};

const keywayBoreDiameterInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameter,
        name: baseHoleInputProps.keywayBoreDiameter.name,
        label: baseHoleInputProps.keywayBoreDiameter.label,
    },
    helpImage: "/images/gears/holes/keyway_bore.svg",
    helpText: "Diameter for the cylindrical portion of the keyway.",
};

const keywayKeyWidthInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayKeyWidth,
        name: baseHoleInputProps.keywayKeyWidth.name,
        label: baseHoleInputProps.keywayKeyWidth.label,
    },
    helpImage: "/images/gears/holes/keyway_key_width.svg",
    helpText: "The distance between the two paralel faces of the key.",
};

const keywayBoreDiameterPlusKeyHeightInputConfig: InputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameterPlusKeyLength,
        name: baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name,
        label: baseHoleInputProps.keywayBoreDiameterPlusKeyLength.label,
    },
    helpImage: "/images/gears/holes/keyway_bore_plus_key.svg",
    helpText: "Nominal length of the keyway, measured from the center of the key's top to the bore diameter.",
};


export const getHoleInputConfigs = (prefix: string = '') => createConditionalInputConfigs(
    {
        prefix,
        selector: {
            name: baseHoleTypeInputProps.hole_type.name,
            label: baseHoleTypeInputProps.hole_type.label,
            data: Object.values(baseHoleTypeInputProps)
                .filter(item => item.name !== 'hole_type' && item.name !== 'square')
                .map(item => ({ label: item.label, value: item.name })),
            color: "slate.6",
            defaultValue: 'none',
        },
        inputs: [
            {
                config: {
                    ...radiusInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.circular.name,
            },
            {
                config: {
                    ...hexagonalCircumradiusInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.hexagonal.name,
            },
            {
                config: {
                    ...squareCircumradiusInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.square.name,
            },
            {
                config: {
                    ...keywayKeyWidthInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.keyway.name,
            },
            {
                config: {
                    ...keywayBoreDiameterInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.keyway.name,
            },
            {
                config: {
                    ...keywayBoreDiameterPlusKeyHeightInputConfig
                },
                showWhenValue: baseHoleTypeInputProps.keyway.name,
            },
        ],
    }
);