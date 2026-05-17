import { GearCardWithForm } from "@/types/gearCards";
import { gearCardHeaders } from "@/forms/configs/generators/cardHeaders"
import {
  bevelPinpionNumberOfTeethInputConfig,
  bevelWheelNumberOfTeethInputConfig,
  doubleHelicalLengthInputConfig,
  helixAngleInputConfig,
  helixDirectionInputConfig,
  helicalLengthInputConfig,
  helicalSystemInputConfig,
  lengthInputConfig,
  moduleInputConfig,
  numberOfTeethInputConfig,
  pressureAngleInputConfig,
  profileShiftCoefficientInputConfig,
  rackBaseHeightInputConfig,
  rackModuleInputConfig,
  rackPressureAngleInputConfig,
  radialThicknessInputConfig,
  rackWidthInputConfig,
  rackNumberOfTeethInputConfig,
} from "@/forms/configs/inputs/gear/inputs";
import { advancedGearValidations, externalGearValidations, internalGearValidations, lengthValidation, straightBevelGearValidations } from "@/lib/common/validations";
import { getHoleInputConfigs } from "@/forms/configs/inputs/hole/inputs";
import { gearAdvancedParamsFormSection, gearBaseParamsFormSection, holeTypeSelectorFormSection } from "../cardHeaders";

export const GearCards: GearCardWithForm[] = [
  {
    ...gearCardHeaders.double_helical,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          helixDirectionInputConfig,
          helicalSystemInputConfig,
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          helixAngleInputConfig,
          doubleHelicalLengthInputConfig
        ],
      },
      { ...holeTypeSelectorFormSection },
      {
        ...gearAdvancedParamsFormSection,
        inputs: [
          profileShiftCoefficientInputConfig,
        ],
      },
    ],
    validate: {
      ...externalGearValidations(true),
      ...lengthValidation(''),
      ...advancedGearValidations()
    }
  },
  {
    ...gearCardHeaders.spur,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          lengthInputConfig
        ],
      },
      {
        ...holeTypeSelectorFormSection
      },
      {
        ...gearAdvancedParamsFormSection,
        inputs: [
          profileShiftCoefficientInputConfig,
        ],

      },
    ],
    validate: {
      ...externalGearValidations(false),
      ...lengthValidation(''),
      ...advancedGearValidations()
    }
  },
  {
    ...gearCardHeaders.helical,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          helixDirectionInputConfig,
          helicalSystemInputConfig,
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          helixAngleInputConfig,
          helicalLengthInputConfig
        ],
      },
      {
        ...holeTypeSelectorFormSection
      },
      {
        ...gearAdvancedParamsFormSection,
        inputs: [
          profileShiftCoefficientInputConfig,
        ],

      },
    ],
    validate: {
      ...externalGearValidations(false),
      ...lengthValidation(''),
      ...advancedGearValidations()
    }
  },
  {
    ...gearCardHeaders.internal_double_helical,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          helixDirectionInputConfig,
          helicalSystemInputConfig,
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          helixAngleInputConfig,
          doubleHelicalLengthInputConfig,
          radialThicknessInputConfig,
        ],
      },
    ],
    validate: {
      ...internalGearValidations(true),
      ...lengthValidation('')
    }
  },
  {
    ...gearCardHeaders.internal_spur,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          lengthInputConfig,
          radialThicknessInputConfig,
        ],
      },
    ],
    validate: {
      ...internalGearValidations(false),
      ...lengthValidation('')
    }
  },
  {
    ...gearCardHeaders.internal_helical,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          helixDirectionInputConfig,
          helicalSystemInputConfig,
          moduleInputConfig,
          numberOfTeethInputConfig,
          pressureAngleInputConfig,
          helixAngleInputConfig,
          helicalLengthInputConfig,
          radialThicknessInputConfig,
        ],

      },
    ],
    validate: {
      ...internalGearValidations(true),
      ...lengthValidation('')
    }
  },
  {
    ...gearCardHeaders.rack,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          rackModuleInputConfig,
          rackPressureAngleInputConfig,
          rackWidthInputConfig,
          rackBaseHeightInputConfig,
          rackNumberOfTeethInputConfig
        ],

      },
    ]
  },
  {
    ...gearCardHeaders.straight_bevel,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          moduleInputConfig,
          pressureAngleInputConfig,
          bevelPinpionNumberOfTeethInputConfig,
          bevelWheelNumberOfTeethInputConfig,
        ],

      },
      {
        ...holeTypeSelectorFormSection,
        inputs: [
          ...getHoleInputConfigs('Pinion'),
          ...getHoleInputConfigs('Wheel'),
        ]
      },
    ],
    validate: {
      ...straightBevelGearValidations()
    }
  },
];