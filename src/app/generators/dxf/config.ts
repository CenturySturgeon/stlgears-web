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
    image: "/images/gears/internal_spur.png",
    title: "Internal Spur Gear",
    description: "Something else",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, radialThicknessInputConfig],
  },
  {
    image: "/images/gears/rack.png",
    title: "Rack",
    description: "Transform rotational motion into linear",
    inputConfigs: [rackModuleInputConfig, rackPressureAngleInputConfig, rackBaseHeightInputConfig, rackLengthInputConfig, rackNumberOfTeethInputConfig],
  },
  {
    image: "/images/gears/spur.png",
    title: "Spur Gear",
    description: "A staple in machinery; simple but noisy.",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig],
  },
];