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
} from "@/components/Form/Inputs/configs";
import { IconAdjustmentsAlt, IconAdjustmentsPlus, IconSettings } from '@tabler/icons-react';


import { InputConfig } from "@/types/inputConfigs";
import { GearCardHeader } from "@/app/generators/config";
import { HoleTypeSelector } from "@/components/Form/Inputs/HoleSelector/HoleSelector";

type AccordionItemContent =
  | { type: 'input-grid'; inputConfigs: InputConfig[] }
  | { type: 'custom-component'; component: React.ComponentType<{ form: any }> };

export type AccordionSection = {
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  content: AccordionItemContent;
};

export type GearCardType = GearCardHeader & {
  formSections: AccordionSection[],
}

const gearBaseParamsFormSection: AccordionSection = {
  label: "Base",
  description: "Required gear parameters",
  icon: IconAdjustmentsAlt,
  content: {
    type: "input-grid",
    inputConfigs: [],
  }
}

const gearAdvancedParamsFormSection: AccordionSection = {
  label: "Advanced",
  description: "Advanced gear parameters",
  icon: IconAdjustmentsPlus,
  content: {
    type: "input-grid",
    inputConfigs: [],
  }
}

const holeTypeSelectorFormSection: AccordionSection = {
  label: "Hole",
  description: "Configure hole type and dimensions",
  icon: IconSettings,
  content: {
    type: "custom-component",
    component: HoleTypeSelector,
  }
}

export const stlGearCards: GearCardType[] = [
  {
    ...gearCardHeaders.double_helical,
    formSections: [
      {
        ...gearBaseParamsFormSection,
        content: {
          ...gearBaseParamsFormSection.content,
          type: "input-grid",
          inputConfigs: [
            helixDirectionInputConfig,
            helicalSystemInputConfig,
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            helixAngleInputConfig,
            doubleHelicalLengthInputConfig
          ],
        }
      },
      { ...holeTypeSelectorFormSection },
      {
        ...gearAdvancedParamsFormSection,
        content: {
          ...gearBaseParamsFormSection.content,
          type: "input-grid",
          inputConfigs: [
            profileShiftCoefficientInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.spur,
    formSections: [
      {
        label: "Base",
        description: "Required gear parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            lengthInputConfig
          ],
        }
      },
      {
        label: "Hole",
        description: "Configure hole type and dimensions",
        icon: IconSettings,
        content: {
          type: "custom-component",
          component: HoleTypeSelector,
        }
      },
      {
        ...gearAdvancedParamsFormSection,
        content: {
          ...gearBaseParamsFormSection.content,
          type: "input-grid",
          inputConfigs: [
            profileShiftCoefficientInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.helical,
    formSections: [
      {
        label: "Base",
        description: "Required gear parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            helixDirectionInputConfig,
            helicalSystemInputConfig,
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            helixAngleInputConfig,
            helicalLengthInputConfig
          ],
        }
      },
      {
        label: "Hole",
        description: "Configure hole type and dimensions",
        icon: IconSettings,
        content: {
          type: "custom-component",
          component: HoleTypeSelector,
        }
      },
      {
        ...gearAdvancedParamsFormSection,
        content: {
          ...gearBaseParamsFormSection.content,
          type: "input-grid",
          inputConfigs: [
            profileShiftCoefficientInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.internal_double_helical,
    formSections: [
      {
        label: "Base",
        description: "Required gear parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            helixDirectionInputConfig,
            helicalSystemInputConfig,
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            helixAngleInputConfig,
            doubleHelicalLengthInputConfig,
            radialThicknessInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.internal_spur,
    formSections: [
      {
        label: "Base",
        description: "Required gear parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            lengthInputConfig,
            radialThicknessInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.internal_helical,
    formSections: [
      {
        label: "Base",
        description: "Required gear parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            helixDirectionInputConfig,
            helicalSystemInputConfig,
            moduleInputConfig,
            numberOfTeethInputConfig,
            pressureAngleInputConfig,
            helixAngleInputConfig,
            helicalLengthInputConfig,
            radialThicknessInputConfig,
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.rack,
    formSections: [
      {
        label: "Base",
        description: "Required rack parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            rackModuleInputConfig,
            rackNumberOfTeethInputConfig,
            rackPressureAngleInputConfig,
            rackLengthInputConfig,
            rackWidthInputConfig,
            rackBaseHeightInputConfig
          ],
        }
      },
    ]
  },
  {
    ...gearCardHeaders.straight_bevel,
    formSections: [
      {
        label: "Base",
        description: "Required rack parameters",
        icon: IconAdjustmentsAlt,
        content: {
          type: "input-grid",
          inputConfigs: [
            moduleInputConfig,
            pressureAngleInputConfig,
            bevelPinpionNumberOfTeethInputConfig,
            bevelWheelNumberOfTeethInputConfig,
          ],
        }
      },
      { ...holeTypeSelectorFormSection }, // TODO: Mod the component so you can add two (pinion and wheel)
    ]
  },
];