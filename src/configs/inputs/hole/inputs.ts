import { InputConfig } from "@/types/inputConfigs";
import { baseHoleInputProps, genericDistanceInputConfig } from "../base";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl";
import { baseHoleTypeInputProps } from "../base";

// Helper type for the factory parameters
export type PrefixModifiers = {
    name: (key: string) => string;
    label: (key: string) => string;
};

const createHoleTypeSelectorConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        ...baseHoleTypeInputProps.hole_type,
        name: name(baseHoleTypeInputProps.hole_type.name),
        label: label(baseHoleTypeInputProps.hole_type.label),
        data: [
            ...Object.values(baseHoleTypeInputProps)
                .filter(item => item.name !== 'hole_type' && item.name != 'square')
                .map(item => ({
                    label: item.label,
                    value: item.name,
                }))
        ],
        color: "slate.6",
        defaultValue: 'none',
    },
});

const createRadiusInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: name(baseHoleInputProps.circleRadius.name),
        label: label(baseHoleInputProps.circleRadius.label),
        defaultValue: 5,
    },
    helpImage: "/images/gears/holes/radius.svg",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.circular.name,
});

const createHexagonalCircumradiusInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.hexagonalCircumradius,
        name: name(baseHoleInputProps.hexagonalCircumradius.name),
        label: label(baseHoleInputProps.hexagonalCircumradius.label),
        defaultValue: 5,
    },
    helpImage: "/images/gears/holes/hexagonal_circumradius.svg",
    helpText: "The distance from the center to one of the hexagon's vertices.",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.hexagonal.name,
});

const createSquareCircumradiusInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.squareCircumradius,
        name: name(baseHoleInputProps.squareCircumradius.name),
        label: label(baseHoleInputProps.squareCircumradius.label),
    },
    helpImage: "/images/gears/holes/square_circumradius.svg",
    helpText: "The distance from the center to one of the square's vertices.",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.square.name,
});

const createKeywayBoreDiameterInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameter,
        name: name(baseHoleInputProps.keywayBoreDiameter.name),
        label: label(baseHoleInputProps.keywayBoreDiameter.label),
    },
    helpImage: "/images/gears/holes/keyway_bore.svg",
    helpText: "Diameter for the cylindrical portion of the keyway.",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.keyway.name,
});

const createKeywayKeyWidthInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayKeyWidth,
        name: name(baseHoleInputProps.keywayKeyWidth.name),
        label: label(baseHoleInputProps.keywayKeyWidth.label),
    },
    helpImage: "/images/gears/holes/keyway_key_width.svg",
    helpText: "The distance between the two paralel faces of the key.",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.keyway.name,
});

const createKeywayBoreDiameterPlusKeyHeightInputConfig = ({ name, label }: PrefixModifiers): InputConfig => ({
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameterPlusKeyLength,
        name: name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name),
        label: label(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.label),
    },
    helpImage: "/images/gears/holes/keyway_bore_plus_key.svg",
    helpText: "Nominal length of the keyway, measured from the center of the key's top to the bore diameter.",
    showWhen: (values) => values[name(baseHoleTypeInputProps.hole_type.name)] === baseHoleTypeInputProps.keyway.name,
});

export const getHoleInputConfigs = (prefix: string = ''): InputConfig[] => {
    const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
    const upperAndLower = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const label = (key: string) =>
        prefix ? `${upperAndLower(prefix + " " + key)}` : key;

    const modifiers: PrefixModifiers = { name, label };

    return [
        createHoleTypeSelectorConfig(modifiers),
        createRadiusInputConfig(modifiers),
        createHexagonalCircumradiusInputConfig(modifiers),
        // createSquareCircumradiusInputConfig(modifiers), 
        createKeywayBoreDiameterInputConfig(modifiers),
        createKeywayBoreDiameterPlusKeyHeightInputConfig(modifiers),
        createKeywayKeyWidthInputConfig(modifiers),
    ];
};
