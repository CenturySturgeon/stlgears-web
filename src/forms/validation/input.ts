import { UNITS } from "@/lib/common/constants";
import { gearInputsData } from "@/forms/configs/inputs/gear/inputs";
import { HOLES_MAX_DISTANCE, HOLES_MIN_DISTANCE } from "@/forms/configs/inputs/hole/inputs";
import { baseGearInputProps, baseHoleInputProps, baseHoleTypeInputProps } from "@/forms/configs/inputs/base";
import { getBevelGearMaxRadius, getGearPolygonRadius, getKeywayTotalRadius, inStringSet, inRange, required, } from "@/forms/validation/utils";

// gear input validations
export const helicalSystemValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.helical_system.name)]: (value: string) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const invalid_error = inStringSet(value, gearInputsData.helicalSystem.data);
      if (invalid_error) {
        return invalid_error;
      }

      return null;
    },
  }
};


export const helixAngleValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.helix_angle.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.helixAngle.min,
        gearInputsData.helixAngle.max,
        UNITS.degrees,
        baseGearInputProps.helix_angle.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


export const helixDirectionValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.helix_direction.name)]: (value: string) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const invalid_error = inStringSet(value, gearInputsData.helixDirection.data);
      if (invalid_error) {
        return invalid_error;
      }

      return null;
    },
  }
};


export const lengthValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.length.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.length.min,
        gearInputsData.length.max,
        UNITS.milimiters,
        baseGearInputProps.length.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


export const moduleValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.module.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.module.min,
        gearInputsData.module.max,
        UNITS.milimiters,
        baseGearInputProps.module.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


export const numberOfTeethValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.numer_of_teeth.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.numberOfTeeth.min,
        gearInputsData.numberOfTeeth.max,
        '',
        baseGearInputProps.numer_of_teeth.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


export const pressureAngleValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.pressure_angle.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.pressureAngle.min,
        gearInputsData.pressureAngle.max,
        UNITS.degrees,
        baseGearInputProps.pressure_angle.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


export const profileShiftValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.profile_shift_coefficient.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.profileShiftCoefficient.min,
        gearInputsData.profileShiftCoefficient.max,
        '',
        baseGearInputProps.profile_shift_coefficient.label
      );
      if (range_error) {
        return range_error;
      }
      return null;
    },
  }
};


export const radialThicknessValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseGearInputProps.radial_thickness.name)]: (value: number) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      const range_error = inRange(
        value,
        gearInputsData.radialThickness.min,
        gearInputsData.radialThickness.max,
        UNITS.milimiters,
        baseGearInputProps.radial_thickness.label
      );
      if (range_error) {
        return range_error;
      }

      return null;
    },
  }
};


// hole input validations
export const holeSelectorValidation = (prefix: string = '') => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleTypeInputProps.hole_type.name)]: (value: string) => {

      const required_error = required(value);
      if (required_error) {
        return required(value);
      }

      // TODO unify hole selector data
      const invalid_error = inStringSet(value, [baseHoleTypeInputProps.none.name, baseHoleTypeInputProps.circular.name, baseHoleTypeInputProps.hexagonal.name, baseHoleTypeInputProps.keyway.name]);
      if (invalid_error) {
        return invalid_error;
      }

      return null;
    },
  }
};


export const holeCircleRadiusValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.circleRadius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.circular does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.circular.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },
  }
};


export const holeHexagonalCircumadiusValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.hexagonalCircumradius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.hexagonal does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.hexagonal.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },
  }
};


export const holeKeywayBoreDiameterValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.keywayBoreDiameter.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

      if (value / 2 >= maxRadius) {
        return `Bore diameter is too big, max allowed is ${maxRadius}mm.`;
      }
      if (keywayVirtualRadius > maxRadius) {
        return `Keyway's bore center to key corner can't exceed gear's max of ${maxRadius}${UNITS.milimiters}`
      }
      return null;
    },
  }
};


export const holeKeywayKeyWidthValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.keywayKeyWidth.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

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
  }
};


export const holeKeywayBoreDiameterPlusKeyLengthValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]: (value: number, values: Record<string, any>) => {
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.keyway.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const keywayVirtualRadius = getKeywayTotalRadius(
        values[name(baseHoleInputProps.keywayKeyWidth.name)],
        values[name(baseHoleInputProps.keywayBoreDiameter.name)],
        values[name(baseHoleInputProps.keywayBoreDiameterPlusKeyLength.name)]
      );
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

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
  }
};


export const holeSquareRadiusValidation = (prefix: string = '', getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    [name(baseHoleInputProps.squareCircumradius.name)]: (value: number, values: Record<string, any>) => {
      // Only validate if this hole type is currently selected 
      // (baseHoleTypeInputProps.square does not neet the prefix as it's a value for the selector
      if (values[name(baseHoleTypeInputProps.hole_type.name)] !== baseHoleTypeInputProps.square.name) return null;

      const maxRadius = getMaxRadius(values, name);
      const range_error = inRange(value, HOLES_MIN_DISTANCE, HOLES_MAX_DISTANCE, UNITS.milimiters);

      if (range_error) {
        return range_error;
      }

      if (value >= maxRadius) {
        return `Radius too big, max allowed is ${maxRadius}mm.`;
      }
      return null;
    },
  }
};


const createHoleValidations = (
  prefix: string = '',
  getMaxRadius: (values: Record<string, any>, nameFn: (key: string) => string) => number
) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;

  return {
    // Validation for the selector itself
    ...holeSelectorValidation(prefix),

    // Validation for the circular radius
    ...holeCircleRadiusValidation(prefix, getMaxRadius),

    // Validation for the hexagonal circumradius
    ...holeHexagonalCircumadiusValidation(prefix, getMaxRadius),

    // Validation for the Keyway
    ...holeKeywayBoreDiameterPlusKeyLengthValidation(prefix, getMaxRadius),
    ...holeKeywayBoreDiameterValidation(prefix, getMaxRadius),
    ...holeKeywayKeyWidthValidation(prefix, getMaxRadius),

    // Validation for the square circumradius
    ...holeSquareRadiusValidation(prefix, getMaxRadius)
  };
};


const gearHoleMaxRadiusGetter = (values: Record<string, any>, name: (key: string) => string) => {
  return getGearPolygonRadius(
    values[name(baseGearInputProps.module.name)],
    values[name(baseGearInputProps.numer_of_teeth.name)],
    values[name(baseGearInputProps.profile_shift_coefficient.name)],
    values[name(baseGearInputProps.helix_angle.name)] ?? 0
  );
};


const createBevelGearMaxRadiusGetter = (isPinion: boolean, pinion_prefix: string, wheel_prefix: string) => {
  return (values: Record<string, any>, name: (key: string) => string) => {

    // "name" automatically applies the current prefix ('Pinion' or 'Wheel')
    // Just construct the helper for the opposing gear
    const opposingPrefix = isPinion ? wheel_prefix : pinion_prefix;
    const opposingName = (key: string) => `${opposingPrefix}_${key}`;

    // Module is shared, no prefix!
    const moduleValue = values[baseGearInputProps.module.name];

    const currentGearTeeth = values[name(baseGearInputProps.numer_of_teeth.name)];
    const opposingGearTeeth = values[opposingName(baseGearInputProps.numer_of_teeth.name)];

    return getBevelGearMaxRadius(
      moduleValue,
      currentGearTeeth,
      opposingGearTeeth
    );
  };
};


export const gearHoleValidations = (prefix: string) => {
  return {
    ...createHoleValidations(prefix, gearHoleMaxRadiusGetter),
  };
}


export const bevelGearHoleValidations = (pinioPrefix: string = 'pinion', wheelPrefix: string = 'wheel') => {
  return {
    ...createHoleValidations(pinioPrefix, createBevelGearMaxRadiusGetter(true, pinioPrefix, wheelPrefix)),
    ...createHoleValidations(wheelPrefix, createBevelGearMaxRadiusGetter(false, pinioPrefix, wheelPrefix))
  };
}
