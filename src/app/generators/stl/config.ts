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
    ...gearCardHeaders.double_helical,
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
    ...gearCardHeaders.spur,
    inputConfigs: [
      moduleInputConfig,
      numberOfTeethInputConfig,
      pressureAngleInputConfig,
      lengthInputConfig
    ],
  },
  {
    ...gearCardHeaders.helical,
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
    ...gearCardHeaders.internal_double_helical,
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
    ...gearCardHeaders.internal_spur,
    inputConfigs: [
      moduleInputConfig,
      numberOfTeethInputConfig,
      pressureAngleInputConfig,
      lengthInputConfig,
      radialThicknessInputConfig,
    ],
  },
  {
    ...gearCardHeaders.internal_helical,
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
    ...gearCardHeaders.rack,
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
    ...gearCardHeaders.straight_bevel,
    inputConfigs: [
      moduleInputConfig,
      pressureAngleInputConfig,
      bevelPinpionNumberOfTeethInputConfig,
      bevelWheelNumberOfTeethInputConfig,
    ],
  },
];