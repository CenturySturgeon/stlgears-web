import { GearCardsData } from "../config";
import {
  moduleInputConfig,
  pressureAngleInputConfig,
  numberOfTeethInputConfig,
  radialThicknessInputConfig,
  rackModuleInputConfig,
  rackPressureAngleInputConfig,
  rackLengthInputConfig,
  rackNumberOfTeethInputConfig,
  rackBaseHeightInputConfig,
} from "@/components/Form/Inputs/configs";

export const cardsData = [
  {
    ...GearCardsData.internal_spur,
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, radialThicknessInputConfig],
  },
  {
    ...GearCardsData.rack,
    inputConfigs: [rackModuleInputConfig, rackPressureAngleInputConfig, rackBaseHeightInputConfig, rackLengthInputConfig, rackNumberOfTeethInputConfig],
  },
  {
    ...GearCardsData.spur,
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig],
  },
];