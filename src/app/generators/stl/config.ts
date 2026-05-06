import { GearCardsData } from "@/app/generators/config"

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
  rackBaseHeightInputConfig,
  rackLengthInputConfig,
  rackModuleInputConfig,
  rackNumberOfTeethInputConfig,
  rackPressureAngleInputConfig,
  radialThicknessInputConfig,
  rackWidthInputConfig,
} from "@/components/Form/Inputs/configs";


export const cardsData = [
  {
    ...GearCardsData.double_helical,
    inputConfigs: [
      helixDirectionInputConfig,
      helicalSystemInputConfig,
      moduleInputConfig,
      numberOfTeethInputConfig,
      pressureAngleInputConfig,
      helixAngleInputConfig,
      doubleHelicalLengthInputConfig
    ],
  },
  {
    ...GearCardsData.spur,
    inputConfigs: [
      moduleInputConfig,
      numberOfTeethInputConfig,
      pressureAngleInputConfig,
      lengthInputConfig
    ],
  },
  {
    ...GearCardsData.helical,
    inputConfigs: [
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
    ...GearCardsData.internal_double_helical,
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
  },
  {
    ...GearCardsData.internal_spur,
    inputConfigs: [
      moduleInputConfig,
      numberOfTeethInputConfig,
      pressureAngleInputConfig,
      lengthInputConfig,
      radialThicknessInputConfig,
    ],
  },
  {
    ...GearCardsData.internal_helical,
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
  },
  {
    ...GearCardsData.rack,
    inputConfigs: [
      rackModuleInputConfig,
      rackNumberOfTeethInputConfig,
      rackPressureAngleInputConfig,
      rackLengthInputConfig,
      rackWidthInputConfig,
      rackBaseHeightInputConfig
    ],
  },
  {
    ...GearCardsData.straight_bevel,
    inputConfigs: [
      moduleInputConfig,
      pressureAngleInputConfig,
      bevelPinpionNumberOfTeethInputConfig,
      bevelWheelNumberOfTeethInputConfig,
    ],
  },
];