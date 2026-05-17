import { rackBaseHeightInputConfig } from "../configs/inputs/gear/inputs";
import {
  bevelGearHoleValidations,
  gearHoleValidations,
  helicalSystemValidation,
  helixAngleValidation,
  helixDirectionValidation,
  lengthValidation,
  moduleValidation,
  numberOfTeethValidation,
  pressureAngleValidation,
  profileShiftValidation,
  rackBaseHeightValidation,
  rackBaseWidhtValidation,
  rackLengthValidation,
  rackNumberOfTeethValidation,
  rackSelectorValidation,
  radialThicknessValidation,
} from "./inputs";


const coreGearValidations = (prefix: string = '') => {
  return {
    ...moduleValidation(prefix),
    ...numberOfTeethValidation(prefix),
    ...pressureAngleValidation(prefix),
  }
};

const advancedGearValidations = (prefix: string = '') => {
  return {
    ...profileShiftValidation(prefix),
  }
};

export const externalGearValidations = (prefix: string = '', isHelical: boolean, is3D: boolean, hasAdvancedParams: boolean = true, hasHole: boolean = true) => {
  return {
    ...coreGearValidations(prefix),
    ...(
      isHelical && {
        ...helicalSystemValidation(prefix),
        ...helixAngleValidation(prefix),
        ...helixDirectionValidation(prefix)
      }
    ),
    ...(
      is3D && {
        ...lengthValidation(prefix)
      }
    ),
    ...(
      hasAdvancedParams && {
        ...advancedGearValidations(prefix)
      }
    ),
    ...(
      hasHole && {
        ...gearHoleValidations(prefix)
      }
    )
  }
};


export const internalGearValidations = (prefix: string = '', isHelical: boolean, is3D: boolean) => {
  return {
    ...externalGearValidations(prefix, isHelical, is3D, false, false),
    ...radialThicknessValidation(prefix)
  }
};


export const straightBevelGearValidations = (pinionPrefix: string = 'pinion', wheelPrefix: string = 'wheel') => {
  return {
    ...moduleValidation(''),
    ...pressureAngleValidation(''),
    ...numberOfTeethValidation(pinionPrefix),
    ...numberOfTeethValidation(wheelPrefix),
    ...bevelGearHoleValidations(pinionPrefix),
    ...bevelGearHoleValidations(wheelPrefix)
  };
};

export const rackValidations = (prefix: string, hasLengthSelector: boolean) => {
  return {
    ...moduleValidation(prefix),
    ...pressureAngleValidation(prefix),
    ...rackBaseHeightValidation(prefix),
    ...rackBaseWidhtValidation(prefix),
    ...(
      hasLengthSelector ? {
        ...rackSelectorValidation(prefix),
        ...rackNumberOfTeethValidation(prefix),
        ...rackLengthValidation(prefix),
      } : {
        ...numberOfTeethValidation(prefix)
      }
    )
  }
};
