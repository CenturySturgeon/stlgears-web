const LENGTH_REGEX = /H\d*\.?\d{3}/;
const MODULE_REGEX = /M\d*\.?\d{3}/;
const NUMBER_OF_TEETH_REGEX = /Z\d*/;
const HELIX_ANGLE_REGEX = /AH\-?\d*\.?\d/;
const HELICAL_SYSTEM_REGEX = /M/;
const OUTER_DIAMETER_REGEX = /OD\d*\.?\d{3}/;
const RACK_WIDTH_REGEX = /W\-?\d*\.?\d*/;
const PINION_NUMBER_OF_TEETH_REGEX = /Zp\d*/;
const PRESSURE_ANGLE_REGEX = /AP\d*\.?\d*/;
const WHEEL_NUMBER_OF_TEETH_REGEX = /Zw\d*/;

//Hole regexes
const BORE_DIAMETER_PLUS_KEY_HEIGHT_REGEX = /BPKwD\d*\.?\d{3}/;
const CIRCULAR_HOLE_REGEX = /CIR\d*\.?\d{3}/;
const HEXAGONAL_HOLE_REGEX = /HEX\d*\.?\d{3}/;
const KEYWAY_BORE_DIAMETER_REGEX = /KWB\d*\.?\d{3}/;
const KEYWAY_KEY_WIDTH_REGEX = /KwW\d*\.?\d{3}/;
const SQUARE_HOLE_REGEX = /SQR\d*\.?\d{3}/;

enum TAG_GEAR_TYPES {
    doubleHelical = "DHG",
    helical = "HLG",
    internalDoubleHelical = "IDH",
    internalHelical = "IHG",
    internalSpur = "ISG",
    rack = "RCK",
    spur = "SPG",
    straightBevel = "SBG",
};

const TAG_GEAR_TYPES_TO_GEAR_NAME = {
    [TAG_GEAR_TYPES.doubleHelical]: "Double helical gear",
    [TAG_GEAR_TYPES.helical]: "Helical gear",
    [TAG_GEAR_TYPES.internalDoubleHelical]: "Internal double helical gear",
    [TAG_GEAR_TYPES.internalHelical]: "Internal helical gear",
    [TAG_GEAR_TYPES.internalSpur]: "Internal spur gear",
    [TAG_GEAR_TYPES.rack]: "Rack",
    [TAG_GEAR_TYPES.spur]: "Spur gear",
    [TAG_GEAR_TYPES.straightBevel]: "Straight bevel gear",
};

const REGEX_TO_PARAM_NAME = new Map([
    [LENGTH_REGEX, "Length"],
    [MODULE_REGEX, "Module"],
    [NUMBER_OF_TEETH_REGEX, "Number of teeth"],
    [HELIX_ANGLE_REGEX, "Helix angle"],
    [HELICAL_SYSTEM_REGEX, "Helical system"],
    [OUTER_DIAMETER_REGEX, "Outer diameter"],
    [RACK_WIDTH_REGEX, "Base width"],
    [PINION_NUMBER_OF_TEETH_REGEX, "Pinion's number of teeth"],
    [PRESSURE_ANGLE_REGEX, "Pressure angle"],
    [WHEEL_NUMBER_OF_TEETH_REGEX, "Wheel's number of teeth"],
    // Hole regex
    [BORE_DIAMETER_PLUS_KEY_HEIGHT_REGEX, "Bore diameter plus key length"],
    [CIRCULAR_HOLE_REGEX, "Hole radius"],
    [HEXAGONAL_HOLE_REGEX, "Hexagonal hole circumradius"],
    [KEYWAY_BORE_DIAMETER_REGEX, "Bore diameter"],
    [KEYWAY_KEY_WIDTH_REGEX, "Key width"],
    [SQUARE_HOLE_REGEX, "Square hole circumradius"],
]);

const GEAR_TYPE_TO_REGEX_ARRAY = {
    [TAG_GEAR_TYPES.doubleHelical]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, HELIX_ANGLE_REGEX, LENGTH_REGEX],
    [TAG_GEAR_TYPES.helical]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, HELIX_ANGLE_REGEX, LENGTH_REGEX],
    [TAG_GEAR_TYPES.internalDoubleHelical]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, HELIX_ANGLE_REGEX, LENGTH_REGEX, OUTER_DIAMETER_REGEX],
    [TAG_GEAR_TYPES.internalHelical]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, HELIX_ANGLE_REGEX, LENGTH_REGEX, OUTER_DIAMETER_REGEX],
    [TAG_GEAR_TYPES.internalSpur]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, LENGTH_REGEX, OUTER_DIAMETER_REGEX],
    [TAG_GEAR_TYPES.rack]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, RACK_WIDTH_REGEX],
    [TAG_GEAR_TYPES.spur]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, NUMBER_OF_TEETH_REGEX, LENGTH_REGEX],
    [TAG_GEAR_TYPES.straightBevel]: [MODULE_REGEX, PRESSURE_ANGLE_REGEX, PINION_NUMBER_OF_TEETH_REGEX, WHEEL_NUMBER_OF_TEETH_REGEX],
};

function extractNumber(str: string): string {
    const match = str.match(/-?\d+(\.\d+)?/);
    return match ? String(match[0]) : "";
}

export function getGearParamsFromTag(tag: string): Record<string, string> {
    let paramNamesToValues: Record<string, string> = {};

    const tagGearType = Object.values(TAG_GEAR_TYPES).filter((value) =>
        tag.includes(value)
    )[0];

    paramNamesToValues["Gear type"] = TAG_GEAR_TYPES_TO_GEAR_NAME[tagGearType];

    if (tag.includes("GSOL N") || tag.includes("GFSI N")) {
        paramNamesToValues["Helical system"] = "Normal"
    } else if (tagGearType in [TAG_GEAR_TYPES.internalSpur, TAG_GEAR_TYPES.rack, TAG_GEAR_TYPES.spur, TAG_GEAR_TYPES.straightBevel]) {
    } else {
        paramNamesToValues["Helical system"] = "Radial"
    }

    for (const regex of GEAR_TYPE_TO_REGEX_ARRAY[tagGearType]) {
        const name = REGEX_TO_PARAM_NAME.get(regex);
        const value = tag.match(regex);
        if (!name || !value) continue;

        paramNamesToValues[name] = extractNumber(value[0]);
    }

    if (tag.includes("|")) {
        let holeRegexArray = []

        if (tag.match(CIRCULAR_HOLE_REGEX)) {
            holeRegexArray.push(CIRCULAR_HOLE_REGEX);
        } else if (tag.match(HEXAGONAL_HOLE_REGEX)) {
            holeRegexArray.push(HEXAGONAL_HOLE_REGEX);
        } else if (tag.match(KEYWAY_BORE_DIAMETER_REGEX) || tag.match(KEYWAY_KEY_WIDTH_REGEX) || tag.match(BORE_DIAMETER_PLUS_KEY_HEIGHT_REGEX)) {
            holeRegexArray.push(KEYWAY_BORE_DIAMETER_REGEX);
            holeRegexArray.push(KEYWAY_KEY_WIDTH_REGEX);
            holeRegexArray.push(BORE_DIAMETER_PLUS_KEY_HEIGHT_REGEX);
        }

        for (const regex of holeRegexArray) {
            const name = REGEX_TO_PARAM_NAME.get(regex);
            const value = tag.match(regex);
            if (!name || !value) continue;

            paramNamesToValues[name] = extractNumber(value[0]);
        }
    }

    return paramNamesToValues;
};
