import { gearCardHeaders } from "@/app/generators/config"

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
  rackLengthInputConfig,
  rackModuleInputConfig,
  rackNumberOfTeethInputConfig,
  rackPressureAngleInputConfig,
  radialThicknessInputConfig,
  rackWidthInputConfig,
} from "@/configs/inputs/gear/inputs";
import { getHoleInputConfigs } from "@/configs/inputs/hole/inputs";
import { GearCardWithForm } from "@/types/gearCards";
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    ...gearCardHeaders.rack,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        inputs: [
          rackModuleInputConfig,
          rackNumberOfTeethInputConfig,
          rackPressureAngleInputConfig,
          rackLengthInputConfig,
          rackWidthInputConfig,
          rackBaseHeightInputConfig
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
      { ...holeTypeSelectorFormSection,
        inputs: [
          ...getHoleInputConfigs('Pinion'),
          ...getHoleInputConfigs('Wheel'),
        ]
       }, // TODO: Mod the component so you can add two (pinion and wheel)
    ]
  },
];