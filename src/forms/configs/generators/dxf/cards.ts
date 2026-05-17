import { GearCardWithForm } from "@/types/gearCards";
import { gearCardHeaders } from "@/forms/configs/generators/cardHeaders"
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
} from "@/forms/configs/inputs/gear/inputs";
import { gearAdvancedParamsFormSection, gearBaseParamsFormSection, holeTypeSelectorFormSection } from "../cardHeaders";
import { externalGearValidations, internalGearValidations } from "@/forms/validation/schemas";


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
            // {
            //     ...gearAdvancedParamsFormSection,
            //     inputs: [
            //         profileShiftCoefficientInputConfig,
            //     ],
            // },
        ],
        validate: {
            ...externalGearValidations('', false, false, false, true)
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
                    radialThicknessInputConfig,
                ],

            },
        ],
        validate: {
            ...internalGearValidations('', false, false)
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
                    ...getRackLengthSelector(''),
                ],

            },
        ],
        // validations here
    },
];