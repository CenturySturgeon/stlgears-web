// src/content/equations.ts

export const EQUATIONS = {
  pitchDiameter: {
    number: 1,
    name: "Pitch Diameter",
    formula: 'd = m \\cdot z',
    description: 'The diameter of the pitch circle, where mating gear teeth effectively make contact.',
    copyText: 'pitch_diameter = module * number_of_teeth'
  },
  baseDiameter: {
    number: 2,
    name: "Base Diameter",
    formula: 'd_b = d \\cdot \\cos(\\phi)',
    description: 'The diameter of the base circle from which the involute tooth profile is generated.',
    copyText: 'base_diameter = pitch_diameter * cos(pressure_angle)'
  },
  addendumDiameter: {
    number: 3,
    name: "Addendum Diameter",
    formula: 'd_a = d + 2m',
    description: 'The diameter measured at the tips of the gear teeth.',
    copyText: 'addendum_diameter = pitch_diameter + 2 * module'
  },
  rootDiameter: {
    number: 4,
    name: "Root Diameter",
    formula: 'd_a = d - 2.5m',
    description: 'The diameter measured at the root of the gear teeth.',
    copyText: 'root_diameter = pitch_diameter - 2.5 * module'
  },
  externalGearDistanceBetweenCenters: {
    number: 5,
    name: "Distance between centers for external gears",
    formula: 'C = \\frac{d_{1} + d_{2}}{2}',
    description: 'The distance between the centers of two gears when their pitch circles are tangent.',
    copyText: 'C = (pitch_diameter_1 + pitch_diameter_2) / 2'
  },
  internalGearDistanceBetweenCenters: {
    number: 6,
    name: "Distance between centers for an external and ring gear pair.",
    formula: 'C = \\frac{d_{ring} - d_{external}}{2}',
    description: 'The distance between the centers of an external and ring gear pair when their pitch circles are tangent.',
    copyText: 'C = (pitch_diameter_internal_gear - pitch_diameter_external_gear) / 2'
  },
  transmissionRatio: {
    number: 7,
    name: "Transmission ratio in a gear mesh.",
    formula: 'i = \\frac{\\omega_{Driving}}{\\omega_{Driven}} = \\frac{T_{Driven}}{T_{Driving}} = \\frac{z_{Driven}}{z_{Driving}}',
    description: 'General equation to determining the torque|speed ratio between the input and output of a gear mesh.',
    copyText: 'i = (driving_gear_rotational_speed / driven_gear_rotational_speed), i = (driven_gear_torque / driving_gear_torque), i = (n'
  },
} as const;

export type EquationId = keyof typeof EQUATIONS;