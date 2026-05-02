import {
  moduleInputConfig,
  pressureAngleInputConfig,
  numberOfTeethInputConfig,
  lengthInputConfig,
  doubleHelicalLengthInputConfig,
  helicalLengthInputConfig,
  rackModuleInputConfig,
  rackPressureAngleInputConfig,
  rackNumberOfTeethInputConfig,
  rackWidthInputConfig,
  rackBaseHeightInputConfig,
  radialThicknessInputConfig,
} from "@/components/Form/Inputs/configs";


export const cardsData = [
  {
    image: "/images/gears/double_helical.png",
    title: "Double Helical Gear",
    description: "High cost and hard to manufacture, but holds none of its helical counterpart's drawbacks",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, doubleHelicalLengthInputConfig],
  },
  {
    image: "/images/gears/spur.png",
    title: "Spur Gear",
    description: "A staple in machinery; simple yet elegant",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, lengthInputConfig],
  },
  {
    image: "/images/gears/helical.png",
    title: "Helical Gear",
    description: "Rolls with smooth contact, quieter, but generates axial force",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, helicalLengthInputConfig],
  },
  {
    image: "/images/gears/internal_double_helical.png",
    title: "Internal Double Helical Gear",
    description: "Ring variant of the double helical, it's more common two see two opposite helical rings",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, doubleHelicalLengthInputConfig, radialThicknessInputConfig],
  },
  {
    image: "/images/gears/internal_spur.png",
    title: "Internal Spur Gear",
    description: "Ring variant of the spur gear, can be used for high torque applications",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, lengthInputConfig, radialThicknessInputConfig],
  },
  {
    image: "/images/gears/internal_helical.png",
    title: "Internal Helical Gear",
    description: "Ring variant of the helical gear, used to be common in automotive transmissions",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, helicalLengthInputConfig, radialThicknessInputConfig],
  },
  {
    image: "/images/gears/rack.png",
    title: "Rack",
    description: "Transform rotational motion into linear",
    inputConfigs: [rackModuleInputConfig, rackPressureAngleInputConfig, rackNumberOfTeethInputConfig, rackWidthInputConfig, rackBaseHeightInputConfig],
  },
  {
    image: "/images/gears/bevel.png",
    title: "Straight Bevel Gears",
    description: "Modeled in pairs, they transfer power between perpendicular axes",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig],
  },
];