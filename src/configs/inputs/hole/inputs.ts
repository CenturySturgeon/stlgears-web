import { InputConfig } from "@/types/inputConfigs";
import { baseHoleInputProps, genericDistanceInputConfig } from "../base";
import LabeledSegmentedControl from "@/components/Form/Inputs/LabeledSegmentedControl/LabeledSegmentedControl";
import {
    holeRadiusFitsInGear,
    inRange,
    inStringSet,
    validateBoreDiameter,
    validateBoreDiameterPlusKeyHeight,
    validateKeywayCenterToKeyCornerRadius,
    validateKeyWidth,
    whenFieldIs
} from "@/lib/common/validations";
import { UNITS } from "@/lib/common/constants";
import { baseGearInputProps, baseHoleTypeInputProps } from "../base";

const holeTypeSelectorInputConfig: InputConfig = {
    InputComponent: LabeledSegmentedControl,
    inputProps: {
        ...baseHoleTypeInputProps.hole_type,
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
    validate: inStringSet(['none', 'hexagonal', 'circular', 'keyway'], "Hole type is not in allowed list."),
};

const radiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.circleRadius,
        defaultValue: 5,
    },
    helpImage: "/images/gears/holes/radius.svg",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.circular.name,
        inRange(0.05, 400, UNITS.milimiters, 'Radius'),
        holeRadiusFitsInGear(
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
};

const hexagonalCircumradiusInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.hexagonalCircumradius,
        defaultValue: 5,
    },
    helpImage: "/images/gears/holes/hexagonal_circumradius.svg",
    helpText: "The distance from the center to one of the hexagon's vertices.",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.hexagonal.name,
        inRange(0.05, 400, UNITS.milimiters, 'Circumradius'),
        holeRadiusFitsInGear(
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
}

const squareCircumradiusInputConfig = {
    ...hexagonalCircumradiusInputConfig,
    inputProps: {
        ...hexagonalCircumradiusInputConfig.inputProps,
        ...baseHoleInputProps.squareCircumradius,
    },
    helpImage: "/images/gears/holes/square_circumradius.svg",
    helpText: "The distance from the center to one of the square's vertices.",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.square.name,
        inRange(0.05, 400, UNITS.milimiters, 'Circumradius'),
        holeRadiusFitsInGear(
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
}

const keywayBoreDiameterInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameter,
        min: 0.5,
    },
    helpImage: "/images/gears/holes/keyway_bore.svg",
    helpText: "Diameter for the cylindrical portion of the keyway.",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.keyway.name,
        inRange(0.05, 400, UNITS.milimiters, baseHoleInputProps.keywayBoreDiameter.label),
        validateBoreDiameter(
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        ),
        validateKeywayCenterToKeyCornerRadius(
            baseHoleInputProps.keywayKeyWidth.name,
            baseHoleInputProps.keywayBoreDiameter.name,
            baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name,
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
}

const keywayKeyWidthInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayKeyWidth,
    },
    helpImage: "/images/gears/holes/keyway_key_width.svg",
    helpText: "The distance between the two paralel faces of the key.",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.keyway.name,
        validateKeyWidth(
            baseHoleInputProps.keywayBoreDiameter.name,
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        ),
        validateKeywayCenterToKeyCornerRadius(
            baseHoleInputProps.keywayKeyWidth.name,
            baseHoleInputProps.keywayBoreDiameter.name,
            baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name,
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
}

const keywayBoreDiameterPlusKeyHeightInputConfig = {
    ...genericDistanceInputConfig,
    inputProps: {
        ...genericDistanceInputConfig.inputProps,
        ...baseHoleInputProps.keywayBoreDiameterPlusKeyLength
    },
    helpImage: "/images/gears/holes/keyway_bore_plus_key.svg",
    helpText: "Nominal length of the keyway, measured from the center of the key's top to the bore diameter.",
    validate: whenFieldIs(
        baseHoleTypeInputProps.hole_type.name,
        baseHoleTypeInputProps.keyway.name,
        validateBoreDiameterPlusKeyHeight(
            baseHoleInputProps.keywayBoreDiameter.name,
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        ),
        validateKeywayCenterToKeyCornerRadius(
            baseHoleInputProps.keywayKeyWidth.name,
            baseHoleInputProps.keywayBoreDiameter.name,
            baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name,
            baseGearInputProps.module.name,
            baseGearInputProps.numer_of_teeth.name,
            baseGearInputProps.profile_shift_coefficient.name,
            baseGearInputProps.helix_angle.name
        )
    ),
};

export const getHoleInputConfigs = (prefix: string = ''): InputConfig[] => {
    const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
    const upperAndLower = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    const label = (key: string) =>
        prefix ? `${upperAndLower(prefix + " " + key)}` : key;

    const holeTypeFieldName = holeTypeSelectorInputConfig.inputProps.name;


    return [
        {
            ...holeTypeSelectorInputConfig,
            inputProps: {
                ...holeTypeSelectorInputConfig.inputProps,
                name: name(holeTypeFieldName),
                label: label(holeTypeSelectorInputConfig.inputProps.label)
            },
        },
        {
            ...radiusInputConfig,
            inputProps: {
                ...radiusInputConfig.inputProps,
                name: name(radiusInputConfig.inputProps.name),
                label: label(radiusInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name(holeTypeFieldName)] === baseHoleTypeInputProps.circular.name,
        },
        {
            ...hexagonalCircumradiusInputConfig,
            inputProps: {
                ...hexagonalCircumradiusInputConfig.inputProps,
                name: name(hexagonalCircumradiusInputConfig.inputProps.name),
                label: label(hexagonalCircumradiusInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name(holeTypeFieldName)] === baseHoleTypeInputProps.hexagonal.name,
        },
        {
            ...keywayBoreDiameterInputConfig,
            inputProps: {
                ...keywayBoreDiameterInputConfig.inputProps,
                name: name(keywayBoreDiameterInputConfig.inputProps.name),
                label: label(keywayBoreDiameterInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === baseHoleTypeInputProps.keyway.name,
        },
        {
            ...keywayBoreDiameterPlusKeyHeightInputConfig,
            inputProps: {
                ...keywayBoreDiameterPlusKeyHeightInputConfig.inputProps,
                name: name(keywayBoreDiameterPlusKeyHeightInputConfig.inputProps.name),
                label: label(keywayBoreDiameterPlusKeyHeightInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === baseHoleTypeInputProps.keyway.name,
        },
        {
            ...keywayKeyWidthInputConfig,
            inputProps: {
                ...keywayKeyWidthInputConfig.inputProps,
                name: name(keywayKeyWidthInputConfig.inputProps.name),
                label: label(keywayKeyWidthInputConfig.inputProps.label)
            },
            showWhen: (values) => values[name('hole_type')] === baseHoleTypeInputProps.keyway.name,
        },
    ];
};