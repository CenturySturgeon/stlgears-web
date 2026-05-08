import { gearCardHeaders } from "@/app/generators/config"

import {
  bevelPinpionNumberOfTeethInputConfig,
  bevelWheelNumberOfTeethInputConfig,
  doubleHelicalLengthInputConfig,
  getHoleInputConfigs,
  helixAngleInputConfig,
  helixDirectionInputConfig,
  helicalLengthInputConfig,
  helicalSystemInputConfig,
  holeInputConfigs,
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
} from "@/components/Form/Inputs/configs";

import { IconAdjustmentsAlt, IconAdjustmentsPlus, IconSettings } from '@tabler/icons-react';


import { InputConfig } from "@/types/inputConfigs";
import { GearCardHeader } from "@/app/generators/config";

export type AccordionSection = {
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  inputs: InputConfig[];
};

export type GearCardType = GearCardHeader & {
  formSections: AccordionSection[],
}

const gearBaseParamsFormSection: AccordionSection = {
  label: "Base",
  description: "Required gear parameters",
  icon: IconAdjustmentsAlt,
  inputs: []
}

const gearAdvancedParamsFormSection: AccordionSection = {
  label: "Advanced",
  description: "Advanced gear parameters",
  icon: IconAdjustmentsPlus,
  inputs: []
}

const holeTypeSelectorFormSection: AccordionSection = {
  label: "Hole",
  description: "Configure hole type and dimensions",
  icon: IconSettings,
  inputs: holeInputConfigs,
}

export const stlGearCards: GearCardType[] = [
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