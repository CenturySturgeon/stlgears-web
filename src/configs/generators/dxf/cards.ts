import { gearCardHeaders } from "@/app/generators/config"

import {
    getHoleInputConfigs,
    holeInputConfigs,
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

import { IconAdjustmentsAlt, IconAdjustmentsPlus, IconSettings } from '@tabler/icons-react';
import { AccordionSection, GearCardWithForm } from "@/types/gearCards";

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

export const GearCards: GearCardWithForm[] = [
    {
        ...gearCardHeaders.spur,
        formSections: [
            {
                ...gearBaseParamsFormSection,
                inputs: [
                    moduleInputConfig,
                    numberOfTeethInputConfig,
                    pressureAngleInputConfig,
                ],
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
        ...gearCardHeaders.internal_spur,
        formSections: [
            {
                ...gearBaseParamsFormSection,
                inputs: [
                    moduleInputConfig,
                    numberOfTeethInputConfig,
                    pressureAngleInputConfig,
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
];