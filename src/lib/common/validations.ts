import { UNITS } from "./constants";

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
  return polygonRadius;
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

export function maxRadius(moduleField: string, numberOfTeethField: string, profileShiftCoefficientField: string, helixAngleField: string) {
  return (value: number, values: Record<string, any>): string | null => {
    const module: number = values[moduleField];
    const numberOfTeeth: number = values[numberOfTeethField];
    const profileShiftCoefficient: number = values[profileShiftCoefficientField];
    const helixAngle: number = values[helixAngleField] ?? 0; // Not all gears have helix angle input

    const maxRadius = getGearPolygonRadius(module, numberOfTeeth, profileShiftCoefficient, helixAngle);
    if (value >= maxRadius) {
      return `Radius too big, this config allows a max of ${maxRadius}${UNITS.milimiters}.`;
    }
    return null;
  };
}

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
}
