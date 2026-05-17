import { GearCardWithForm } from "@/types/gearCards";
import { gearCardHeaders } from "@/configs/generators/cardHeaders"
import {
    getRackLengthSelector,
    moduleInputConfig,
    numberOfTeethInputConfig,
    pressureAngleInputConfig,
    profileShiftCoefficientInputConfig,
    rackBaseHeightInputConfig,
    rackModuleInputConfig,
    rackPressureAngleInputConfig,
    radialThicknessInputConfig,
    rackWidthInputConfig,
} from "@/configs/inputs/gear/inputs";
import { gearAdvancedParamsFormSection, gearBaseParamsFormSection, holeTypeSelectorFormSection } from "../cardHeaders";


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
                    rackPressureAngleInputConfig,
                    rackWidthInputConfig,
                    rackBaseHeightInputConfig,
                    ...getRackLengthSelector(''),
                ],

            },
        ]
    },
];