import { UNITS } from "./constants";
import { gearInputsData } from "@/configs/inputs/gear/inputs";
import { baseGearInputProps, baseHoleInputProps, baseHoleTypeInputProps } from "@/configs/inputs/base";

function degToRad(degrees: number) {
  return degrees * (Math.PI / 180);
}


function getPolygonApothem(gearPolygonRadius: number, gearPolygonNumberOfVertices: number) {
  let centralAngle = 2 * Math.PI / gearPolygonNumberOfVertices;
  let apothem = gearPolygonRadius * Math.cos(centralAngle / 2);
  return apothem;
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


const getBevelGearMaxRadius = (module: number, numberOfTeeth: number, numberOfTeethPartner: number,): number => {
  const gama = Math.atan(numberOfTeeth / numberOfTeethPartner);
  return (module * numberOfTeeth) - (2.5 * Math.cos(gama));
};


function getKeywayTotalRadius(keyWidth: number, boreDiameter: number, boreDiameterPlusKeyHeight: number) {
  const boreRadius = boreDiameter / 2;
  return Math.sqrt(((boreDiameterPlusKeyHeight - boreRadius) ** 2) + (keyWidth ** 2));
}


function inRange(value: number, min: number, max: number, unit: string, fieldLabel: string = "This field") {
  if (value < min || value > max) {
    return `${fieldLabel} must be in range [${min}${unit}, ${max}${unit}].`;
  }
  return null;
}


// Required field validator
function required(value: string | number, message: string = "This field is required.") {
  if (value === undefined || value === null || value === '') {
    return message;
  }
  return null;
}


function inStringSet(value: string, set: string[] = [], message: string = "Value is not in allowed list.") {
  if (!set.includes(value)) {
    return message;
  }
  return null;
}


const createCoreGearValidations = (prefix: string = '') => {
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
}


const createCoreExternalGearValidations = (prefix: string = '', isHelical: boolean) => {
  const name = (key: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    ...createCoreGearValidations(prefix),
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
    ...(
      isHelical && {
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
    )
  }
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


const externalGearMaxRadiusGetter = (values: Record<string, any>, name: (key: string) => string) => {
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


export const externalGearValidations = (isHelical: boolean) => {
  return {
    ...createCoreExternalGearValidations('', isHelical),
    ...createHoleValidations('', externalGearMaxRadiusGetter)
  }
}

export const straightBevelGearValidations = (pinion_prefix: string = 'pinion', wheel_prefix: string = 'wheel') => {
  const name = (key: string, prefix: string) => prefix ? `${prefix.toLowerCase()}_${key}` : key;
  return {
    ...{
      [baseGearInputProps.module.name]: (value: number) => {

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
      [baseGearInputProps.pressure_angle.name]: (value: number) => {

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
      [name(baseGearInputProps.numer_of_teeth.name, pinion_prefix)]: (value: number) => {

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
      [name(baseGearInputProps.numer_of_teeth.name, wheel_prefix)]: (value: number) => {
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
    },

    // Inject the Pinion context (isPinion = true)
    ...createHoleValidations('pinion', createBevelGearMaxRadiusGetter(true, pinion_prefix, wheel_prefix)),

    // Inject the Wheel context (isPinion = false)
    ...createHoleValidations('wheel', createBevelGearMaxRadiusGetter(false, pinion_prefix, wheel_prefix))
  };
};
