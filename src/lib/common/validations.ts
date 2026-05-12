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
