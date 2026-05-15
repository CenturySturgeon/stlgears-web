import { UNITS } from "./constants";
import { baseGearInputProps, baseHoleInputProps, baseHoleTypeInputProps } from "@/configs/inputs/base";

function degToRad(degrees: number) {
  return degrees * (Math.PI / 180);
}

function getGearPolygonRadius(module: number, numberOfTeeth: number, profileShiftCoefficient: number, helixAngle: number = 0) {
  const transverseModule = helixAngle != 0 ? Math.cos(degToRad(helixAngle)) : module;

  const pitchDiameter = transverseModule * numberOfTeeth;
  const profileShiftOffset = 2 * profileShiftCoefficient * module; // Yes it uses the normal module and not the transverse one as it is offset's a distance and it's determined by it
  const transversePitchDiameter = pitchDiameter + profileShiftOffset;
  const transverseRootDiameter = transversePitchDiameter - 2.5 * module; // Yes, uses the normal module since the root height doesn't care about the plane

  const polygonRadius = (transverseRootDiameter / 2) - 0.5;
  console.log(polygonRadius)
  return polygonRadius;
}

function getPolygonApothem(gearPolygonRadius: number, gearPolygonNumberOfVertices: number) {
  let centralAngle = 2 * Math.PI / gearPolygonNumberOfVertices;
  let apothem = gearPolygonRadius * Math.cos(centralAngle / 2);
  return apothem;
}

function getKeywayTotalRadius(keyWidth: number, boreDiameter: number, boreDiameterPlusKeyHeight: number) {
  const boreRadius = boreDiameter / 2;
  return Math.sqrt(((boreDiameterPlusKeyHeight - boreRadius) ** 2) + (keyWidth ** 2));
}

export function validateKeyWidth(boreDiameterField: string,
  moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string
) {
  return (value: number, values: Record<string, any>): string | null => {
    const boreDiameter: number = values[boreDiameterField];

    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);

    if (value > boreDiameter) {
      return "Key width can't be larger than the bore diameter."
    }
    if (value > maxRadius) {
      return `Key width can't exceed this gear's max of ${maxRadius}${UNITS.milimiters}`
    }

    return null;
  };
}

export function validateBoreDiameter(
  moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string
) {
  return (value: number, values: Record<string, any>): string | null => {

    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);

    if (value >= maxRadius) {
      return `Bore diameter is larger than the gear's max of ${maxRadius}${UNITS.milimiters}.`
    }

    return null;
  };
}

export function validateBoreDiameterPlusKeyHeight(
  boreDiameterField: string,
  moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string
) {
  return (value: number, values: Record<string, any>): string | null => {
    const boreDiameter: number = values[boreDiameterField];

    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);

    if (value <= boreDiameter) {
      return "Bore diameter can't be larger than itself plus key length."
    }
    if (value >= maxRadius) {
      return `Bore diameter plus key length is larger than the gear's max of ${maxRadius}${UNITS.milimiters}.`
    }

    return null;
  };
}

export function validateKeywayCenterToKeyCornerRadius(keyWidthField: string, boreDiameterField: string, boreDiameterPlusKeyHeightField: string,
  moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string
) {
  // Single input's value is irrelevant; this is a group validation
  return (_: number, values: Record<string, any>): string | null => {
    const keyWidth: number = values[keyWidthField];
    const boreDiameter: number = values[boreDiameterField];
    const boreDiameterPlusKeyHeight: number = values[boreDiameterPlusKeyHeightField];

    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);
    const keywayRadius = getKeywayTotalRadius(keyWidth, boreDiameter, boreDiameterPlusKeyHeight)

    if (keywayRadius > maxRadius) {
      return `Keyway's center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
    }

    return null;
  };
}

export function inRange(
  min: number,
  max: number,
  unit: string,
  fieldName: string = "This field"
) {
  return (value: number): string | null => {
    if (value < min || value > max) {
      return `${fieldName} must be in range [${min}${unit}, ${max}${unit}].`;
    }
    return null;
  };
}

// Required field validator
export function required(message: string = "This field is required.") {
  return (value: any): string | null => {
    if (value === undefined || value === null || value === '') {
      return message;
    }
    return null;
  };
}

export function inStringSet(set: string[] = [], message: string = "Value is not in allowed list.") {
  return (value: any): string | null => {
    if (!set.includes(value)) {
      return message;
    }
    return null;
  };
}

export function holeRadiusFitsInGear(moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string) {
  return (value: number, values: Record<string, any>): string | null => {
    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);
    if (value >= maxRadius) {
      return `Radius too big, this gear's max allowed is ${maxRadius}${UNITS.milimiters}.`;
    }
    return null;
  };
}

/**
 * Combines multiple validation functions into a single validator.
 * Runs each validator in order and returns the first error encountered.
 * If all validators pass, returns `null`.
 *
 * @param validators - Array of validator functions. Each validator receives
 *                     `(value: any, values: Record<string, any>)` and returns
 *                     `string | null` (error message or `null` if valid).
 * @returns A merged validator function that executes all input validators sequentially.
 *
 * @example
 * ```typescript
 * const validateAge = mergeValidations(
 *   (value) => (value < 0 ? "Age cannot be negative" : null),
 *   (value) => (value > 120 ? "Age cannot exceed 120" : null)
 * );
 * ```
 */
export function mergeValidations(
  ...validators: Array<(value: any, values: Record<string, any>) => string | null>
): (value: any, values: Record<string, any>) => string | null {
  return (value: any, values: Record<string, any>) => {
    for (const validator of validators) {
      const error = validator(value, values); // Return the first error found
      if (error) return error;
    }
    return null; // All validations passed
  };
};

/**
 * Wraps a set of validators to only run them if a specified field in `values`
 * matches the expected value. Useful for conditional validation (e.g., validate
 * `radius` only if `hole_type === 'circular'`).
 *
 * @param fieldName - The name of the field in `values` to check.
 * @param expectedValue - The value the field must match for validators to run.
 * @param validators - One or more validator functions to apply conditionally.
 *                     Each receives `(value: any, values: Record<string, any>)`.
 * @returns A validator function that runs the input validators only if the
 *          field condition is met; otherwise, returns `null`.
 *
 * @example
 * ```typescript
 * const validateRadius = whenFieldIs(
 *   'hole_type',
 *   'circular',
 *   inRange(0.05, 400, 'mm', 'radius'),
 *   radiusIsLesserThan(401)
 * );
 * ```
 *
 * @remarks
 * - If `fieldName` is missing in `values` or its value doesn't match `expectedValue`,
 *   all validators are skipped (returns `null`).
 * - Uses strict equality (`===`) for comparison.
 */
export function whenFieldIs(
  fieldName: string,
  expectedValue: any,
  ...validators: Array<(value: any, values: Record<string, any>) => string | null>
): (value: any, values: Record<string, any>) => string | null {
  return (value, values) => {
    if (values[fieldName] !== expectedValue) return null;
    return mergeValidations(...validators)(value, values);
  };
}

const createHoleValidations = (
  prefix: string = '',
  getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number
) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;

  return {
    // Validation for the circular radius
    [name(baseHoleInputProps.circleRadius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.circular does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.circular.name) return null;

      const maxRadius = getMaxRadius(values, name);

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },

    // Validation for the hexagonal radius
    [name(baseHoleInputProps.hexagonalCircumradius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.hexagonal does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.hexagonal.name) return null;

      const maxRadius = getMaxRadius(values, name);

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },

    [name(baseHoleInputProps.squareCircumradius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.square does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.square.name) return null;

      const maxRadius = getMaxRadius(values, name);

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },

    // Validation for the Keyway Bore
    [name(baseHoleInputProps.keywayBoreDiameter.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );

      if (value / 2 >= maxRadius) {
        return `Bore diameter is too big, max allowed is ${maxRadius}mm.`;
      }
      if (keywayVirtualRadius > maxRadius) {
        return `Keyway's bore center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      return null;
    },

    // Validation for the Keyway's key width
    [name(baseHoleInputProps.keywayKeyWidth.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );

      if (value > values[name(baseHoleInputProps.keywayBoreDiameter.name)]) {
        return "Key width can't be larger than the bore diameter."
      }
      if (value > maxRadius) {
        return `Key width can't exceed this gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      if (keywayVirtualRadius > maxRadius) {
        return `Keyway's bore center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      return null;
    },

    // Validation for the Keyway's key width
    [name(baseHoleInputProps.keywayKeyWidth.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );

      if (value > values[name(baseHoleInputProps.keywayBoreDiameter.name)]) {
        return "Key width can't be larger than the bore diameter."
      }
      if (value > maxRadius) {
        return `Key width can't exceed this gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      if (keywayVirtualRadius > maxRadius) {
        return `Keyway's bore center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      return null;
    },

    // Validation for the Keyway's bore plus key length
    [name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );

      if (value <= values[name(baseHoleInputProps.keywayBoreDiameter.name)]) {
        return "Bore diameter can't be larger than itself plus key length."
      }
      if (value >= maxRadius) {
        return `Bore diameter plus key length is larger than the gear's max of ${maxRadius}${UNITS.milimiters}.`
      }
      if (keywayVirtualRadius > maxRadius) {
        return `Keyway's bore center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      return null;
    },
  };
};

const standardGearExtractor = (values: Record<string, any>, name: (key: string) => string) => {
  return getGearPolygonRadius(
    values[name(baseGearInputProps.module.name)],
    values[name(baseGearInputProps.numer_of_teeth.name)],
    values[name(baseGearInputProps.profile_shift_coefficient.name)],
    values[name(baseGearInputProps.helix_angle.name)] ?? 0
  );
};

export const standardGearHoleValidations = (
) => {
  return createHoleValidations('', standardGearExtractor);
}