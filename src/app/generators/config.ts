export type GearCardHeader = {
  title: string,
  type: string,
  image: string,
  description: string,
}

export const gearCardHeaders: Record<string, GearCardHeader> = {
  double_helical: {
    title: "Double Helical Gear",
    type: "double_helical",
    image: "/images/gears/double_helical.png",
    description: "High cost and hard to manufacture, but holds none of its helical counterpart's drawbacks",
  },
  spur: {
    title: "Spur Gear",
    type: "spur",
    image: "/images/gears/spur.png",
    description: "A staple in machinery; simple and efficient",
  },
  helical: {
    title: "Helical Gear",
    type: "helical",
    image: "/images/gears/helical.png",
    description: "Rolls with smooth contact, quieter, but generates axial force",
  },
  internal_double_helical: {
    title: "Internal Double Helical Gear",
    type: "internal_double_helical",
    image: "/images/gears/internal_double_helical.png",
    description: "Ring variant of the double helical, it's more common two see two opposite helical rings",
  },
  internal_spur: {
    title: "Internal Spur Gear",
    type: "internal_spur",
    image: "/images/gears/internal_spur.png",
    description: "Ring variant of the spur gear, can be used for high torque applications",
  },
  internal_helical: {
    title: "Internal Helical Gear",
    type: "internal_helical",
    image: "/images/gears/internal_helical.png",
    description: "Ring variant of the helical gear, used to be common in automotive transmissions",
  },
  rack: {
    title: "Rack",
    type: "rack",
    image: "/images/gears/rack.png",
    description: "Transform rotational motion into linear",
  },
  straight_bevel: {
    title: "Straight Bevel Gears",
    type: "straight_bevel",
    image: "/images/gears/bevel.png",
    description: "Modeled in pairs, they transfer power between perpendicular axes",
  },
};