import { gearCardHeaders } from "../config";
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
    ...gearCardHeaders.internal_spur,
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, radialThicknessInputConfig],
  },
  {
    ...gearCardHeaders.rack,
    inputConfigs: [rackModuleInputConfig, rackPressureAngleInputConfig, rackBaseHeightInputConfig, rackLengthInputConfig, rackNumberOfTeethInputConfig],
  },
  {
    ...gearCardHeaders.spur,
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig],
  },
];