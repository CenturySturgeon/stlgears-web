import { InputConfig } from "@/types/inputConfigs";
import { genericDistanceInputConfig } from "../generics";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl";
import { inStringSet, mergeValidations } from "@/lib/common/validations";

const holeTypeSelectorInputConfig: InputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        name: "hole_type",
        label: "Hole type",
        data: [
            { label: 'None', value: 'none' },
            { label: 'Hexagonal', value: 'hexagonal' },
            { label: 'Circular', value: 'circular' },
            { label: 'Keyway', value: 'keyway' },
        ],
        color: "slate.6",
        defaultValue: 'none',
    },
    validate: inStringSet(['none', 'hexagonal', 'circular', 'keyway'], "Hole type is not in allowed list."),
};

const radiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'radius',
        label: 'Radius',
    },
    helpImage: "/images/gears/holes/radius.svg",
};

const hexagonalCircumradiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'circumradius',
        label: 'Circumradius'
    },
    helpImage: "/images/gears/holes/hexagonal_circumradius.svg",
    helpText: "The distance from the center to one of the hexagon's vertices."
}

const squareCircumradiusInputConfig = {
    ...hexagonalCircumradiusInputConfig,
    helpImage: "/images/gears/holes/square_circumradius.svg",
    helpText: "The distance from the center to one of the square's vertices."
}

const keywayBoreDiameterInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'bore_diameter',
        label: 'Bore diameter',
    },
    helpImage: "/images/gears/holes/keyway_bore.svg",
    helpText: "Diameter for the cylindrical portion of the keyway.",
}

const keywayKeyWidthInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'key_width',
        label: 'Keyway key Width',
    },
    helpImage: "/images/gears/holes/keyway_key_width.svg",
    helpText: "The distance between the two paralel faces of the key."
}

const keywayBoreDiameterPlusKeyHeightInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        name: 'bore_diameter_plus_key_height',
        label: 'Bore + Key height',
    },
    helpImage: "/images/gears/holes/keyway_bore_plus_key.svg",
    helpText: "Nominal length of the keyway, measured from the center of the key's top to the bore diameter."
};

export const getHoleInputConfigs = (prefix: string = ''): InputConfig[] => {
    const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
    const upperAndLower = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const label = (key: string) =>
        prefix ? `${upperAndLower(prefix + " " + key)}` : key;

    return [
        {
            ...holeTypeSelectorInputConfig,
            inputProps: {
                ...holeTypeSelectorInputConfig.inputProps,
                name: name('hole_type'),
                label: label(holeTypeSelectorInputConfig.inputProps.label)
            },
        },
        {
            ...radiusInputConfig,
            inputProps: {
                ...radiusInputConfig.inputProps,
                name: name('radius'),
                label: label(radiusInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === 'circular',
        },
        {
            ...hexagonalCircumradiusInputConfig,
            inputProps: {
                ...hexagonalCircumradiusInputConfig.inputProps,
                name: name('circumradius'),
                label: label(hexagonalCircumradiusInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === 'hexagonal',
        },
        {
            ...keywayBoreDiameterInputConfig,
            inputProps: {
                ...keywayBoreDiameterInputConfig.inputProps,
                name: name('bore_diameter'),
                label: label(keywayBoreDiameterInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === 'keyway',
        },
        {
            ...keywayBoreDiameterPlusKeyHeightInputConfig,
            inputProps: {
                ...keywayBoreDiameterPlusKeyHeightInputConfig.inputProps,
                name: name('bore_diameter_plus_key_height'),
                label: label(keywayBoreDiameterPlusKeyHeightInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === 'keyway',
        },
        {
            ...keywayKeyWidthInputConfig,
            inputProps: {
                ...keywayKeyWidthInputConfig.inputProps,
                name: name('key_width'),
                label: label(keywayKeyWidthInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === 'keyway',
        },
    ];
};