import {
  moduleInputConfig,
  pressureAngleInputConfig,
  numberOfTeethInputConfig,
  lengthInputConfig
} from "@/components/Form/Inputs/configs";

const doubleHelicalLengthInputConfig = {...lengthInputConfig, helpImage: "/images/gears/inputs/double_helical_length.svg"}
const helicalLengthInputConfig = {...lengthInputConfig, helpImage: "/images/gears/inputs/helical_length.svg"}

export const cardsData = [
  {
    image: "/images/gears/double_helical.png",
    title: "Double Helical Gear",
    description: "All the benefits, none of the cons (except for price)",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, doubleHelicalLengthInputConfig],
  },
  {
    image: "/images/gears/spur.png",
    title: "Spur Gear",
    description: "A staple in machinery; simple but noisy.",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, lengthInputConfig],
  },
  {
    image: "/images/gears/helical.png",
    title: "Helical Gear",
    description: "Smooth contact, quiet, but generates axial force.",
    inputConfigs: [moduleInputConfig, pressureAngleInputConfig, numberOfTeethInputConfig, helicalLengthInputConfig],
  },
  {
    image: "/images/gears/internal_double_helical.png",
    title: "Internal Double Helical Gear",
    description: "Something else",
    inputConfigs: [],
  },
  {
    image: "/images/gears/internal_spur.png",
    title: "Internal Spur Gear",
    description: "Something else",
    inputConfigs: [],
  },
  {
    image: "/images/gears/internal_helical.png",
    title: "Internal Helical Gear",
    description: "Something else",
    inputConfigs: [],
  },
  {
    image: "/images/gears/rack.png",
    title: "Rack",
    description: "Transform rotational motion into linear",
    inputConfigs: [],
  },
  {
    image: "/images/gears/bevel.png",
    title: "Straight Bevel Gears",
    description: "Transfer power between perpendicular axes",
    inputConfigs: [],
  },
];