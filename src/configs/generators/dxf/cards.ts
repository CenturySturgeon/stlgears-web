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
import { advancedGearValidations, coreGearValidations, internalGearValidations, straightBevelGearValidations } from "@/lib/common/validations";



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
        ],
        validate: {
            ...coreGearValidations(''),
            // hole validations here
            ...advancedGearValidations()
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
            ...internalGearValidations(false)
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