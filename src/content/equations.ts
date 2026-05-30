const rawEquations = {
  pitchDiameter: {
    name: "Pitch Diameter",
    formula: 'd = m \\cdot z',
    description: 'The diameter of the pitch circle, where mating gear teeth effectively make contact.',
    copyText: 'pitch_diameter = module * number_of_teeth'
  },
  baseDiameter: {
    name: "Base Diameter",
    formula: 'd_b = d \\cdot \\cos(\\phi)',
    description: 'The diameter of the base circle from which the involute tooth profile is generated.',
    copyText: 'base_diameter = pitch_diameter * cos(pressure_angle)'
  },
  addendumDiameter: {
    name: "Addendum Diameter",
    formula: 'd_a = d + 2m',
    description: 'The diameter measured at the tips of the gear teeth.',
    copyText: 'addendum_diameter = pitch_diameter + 2 * module'
  },
  rootDiameter: {
    name: "Root Diameter",
    formula: 'd_f = d - 2.5m',
    description: 'The diameter measured at the root of the gear teeth.',
    copyText: 'root_diameter = pitch_diameter - 2.5 * module'
  },
  externalGearDistanceBetweenCenters: {
    name: "Distance between centers for external gears",
    formula: 'C = \\frac{d_{1} + d_{2}}{2}',
    description: 'The distance between the centers of two gears when their pitch circles are tangent.',
    copyText: 'C = (pitch_diameter_1 + pitch_diameter_2) / 2'
  },
  rackPitch: {
    name: "Rack's pitch",
    formula: 'P = \\pi \\cdot m',
    description: 'The distance between teeth at the pitch circle line of a rack.',
    copyText: 'P = math.pi * module'
  },
  rackToothThickness: {
    name: "Rack's tooth thickness",
    formula: 'T = \\frac{\\pi \\cdot m}{2}',
    description: "The thickness of the tooth at the rack's pitch line.",
    copyText: 'T = (math.pi * module) / 2'
  },
  addendum: {
    name: "Addendum",
    formula: 'ha = m',
    description: "The tooth portion from the pitch to the tip (inversed for internal gears).",
    copyText: 'addendum = module'
  },
  deddendum: {
    name: "Deddendum",
    formula: 'hf = 1.25 \\cdot m',
    description: "The tooth portion from the pitch to the gear's body (inversed for internal gears).",
    copyText: 'hf = 1.25 * module'
  },
  totalToothHeight: {
    name: "Total tooth height",
    formula: 'h = 2.25 \\cdot m',
    description: "The total length of the tooth measured from the root radius in the transverse plane.",
    copyText: 'h = 2.25 * module'
  },
  involuteXAxis: {
    name: "Gear involute coordinates at the X axis",
    formula: 'X = \\frac{d_b}{2} \\cdot (\\cos(t + \\sigma) + t \\cdot \\sin(t + \\sigma))',
    description: "X axis coordinates for the involute.",
    copyText: 'x_coordinate_involute = (base_diameter / 2) * (math.cos(t + sigma_for_involute) + t * math.sin(t + sigma_for_involute))'
  },
  involuteYAxis: {
    name: "Gear involute coordinates at the Y axis",
    formula: 'Y = \\frac{d_b}{2} \\cdot (\\sin(t + \\sigma) - t \\cdot \\cos(t + \\sigma))',
    description: "Y axis coordinates for the involute.",
    copyText: 'y_coordinate_involute = (base_diameter / 2) * (math.sin(t + sigma_for_involute) - t * math.cos(t + sigma_for_involute))'
  },
  involuteRollAngle: {
    name: "Roll angle",
    formula: '\\theta_{r_t} = \\sqrt{\\left(\\frac{r_t}{r_b}\\right)^2-1}',
    description: "Angle that controls the length of the involute curve given an arbitrary radius.",
    copyText: 'roll_angle = math.sqrt((radius_t / (base_diameter / 2))**2 - 1)'
  },
  toothThickness: {
    name: "Tooth thickness",
    formula: 'T_{ty} = r_{y}( {\\pi\\over 2z} + {2 \\cdot X \\cdot \\tan(\\alpha)\\over z} + \\text{inv}(\\alpha_t) - \\text{inv}(\\alpha_{ty}) )',
    description: "The tooth thicknes at an arbitrary radius.",
    copyText: 'tooth_thickness = radius * ( math.pi / (2 * number_of_teeth) ) + (( 2 * profile_shift_coefficient * math.tan(pressure_angle) ) / number_of_teeth) + ( math.tan(transverse_pressure_angle) - transverse_pressure_angle)  - ( math.tan(transverse_pressure_angle_at_radius) - transverse_pressure_angle_at_radius)'
  },
  transversePressureAngle: {
    name: "Transverse pressure angle",
    formula: '\\alpha_t = \\tan^{-1}({\\tan(\\alpha) \\over \\cos(\\beta)})',
    description: "The pressure angle the tooth profile has on the transverse plane.",
    copyText: 'transverse_pressure_angle = math.arctan( math.tan(pressure_angle) / math.cos(helix_angle) )'
  },
  transversePressureAngleAtRadius: {
    name: "Transverse pressure angle at an arbitrary radius",
    formula: '\\alpha_{ty} = \\cos^{-1}(\\frac{r_b}{r_y})',
    description: "The pressure angle the tooth profile has on the transverse plane at an arbitrary radius.",
    copyText: 'transverse_pressure_angle = math.arctan( math.tan(pressure_angle) / math.cos(helix_angle) )'
  },
  involuteFunction: {
    name: "Involute of an angle",
    formula: '\\text{inv}(\\psi) = \\tan(\\psi) - \\psi',
    description: "Involute of an angle.",
    copyText: 'involute_of_phi = math.tan(phi) - phi'
  },
  angularToothThickness: {
    name: "Angular tooth thickness at an arbitrary radius",
    formula: '\\sigma_y = \\frac{T_{ty}}{r_y}',
    description: "The tooth thickness, expressed as an angle, at a given radius.",
    copyText: 'angular_tooth_thickness_at_radius = tooth_thickness_at_radius / radius'
  },
  transmissionRatio: {
    name: "Transmission ratio in a gear mesh.",
    formula: 'i = \\frac{\\omega_{Driving}}{\\omega_{Driven}} = \\frac{T_{Driven}}{T_{Driving}} = \\frac{z_{Driven}}{z_{Driving}}',
    description: 'General equation to determining the torque|speed ratio between the input and output of a gear mesh.',
    copyText: 'i = (driving_gear_rotational_speed / driven_gear_rotational_speed), i = (driven_gear_torque / driving_gear_torque), i = (n'
  },
  gearHelixXAxis: {
    name: "Gear helix X axis parametric equation",
    formula: "X = \\frac{d}{2} \\cdot \\cos(t)",
    description: "Parametric equation that controls the coordinates of the gear's helix in the X axis.",
    copyText: "X = r * math.cos(t)"
  },
  gearHelixYAxis: {
    name: "Gear helix Y axis parametric equation",
    formula: "Y = \\frac{d}{2} \\cdot \\sin(t)",
    description: "Parametric equation that controls the coordinates of the gear's helix in the Y axis.",
    copyText: "X = r * math.sin(t)"
  },
  gearHelixZAxis: {
    name: "Gear helix Z axis parametric equation",
    formula: "Z = \\frac{P_h}{2 \\pi} \\cdot t",
    description: "Parametric equation that controls the coordinates of the gear's helix in the Z axis.",
    copyText: "Z = ((math.pi * pitch_diameter * (math.cos(t)/math.sin(t))) / (2 * math.pi)) * t"
  },
  gearHelixPitch: {
    name: "Gear helix's pitch",
    formula: "P_h = \\pi \\cdot d \\cdot  \\frac{\\cos(\\beta)}{\\sin(\\beta)}",
    description: "Helix pitch equation for a gear.",
    copyText: "helix_pitch = math.pi * pitch_diameter * (math.cos(t)/math.sin(t))"
  },
  transverseModule: {
    name: "Transverse module",
    formula: "m_t = \\frac{m_n}{\\cos(\\beta)}",
    description: "The equivalent module for the transverse plane based on the one from the normal plane.",
    copyText: "transverse_module = normal_module / math.cos(helix_angle)"
  },
  transversePitchDiameter: {
    name: "Transverse pitch diameter",
    formula: "d_t = m_t \\cdot z",
    description: "The pitch diameter on the transverse plane.",
    copyText: "transverse_pitch_diameter = transverse_module * number_of_teeth"
  },
  transverseBaseDiameter: {
    name: "Transverse base diameter",
    formula: "d_{bt} = d_t \\cdot \\cos(\\alpha_t)",
    description: "The base diameter on the transverse plane.",
    copyText: "transverse_base_diameter = transverse_pitch_diameter * math.cos(transverse_pressure_anlge)"
  },
  transverseAddendumDiameter: {
    name: "Transverse addendum diameter",
    formula: "d_{at} = d_t + 2m_n",
    description: "The addendum diameter on the transverse plane.",
    copyText: "transverse_addendum_diameter = transverse_pitch_diameter + 2 * module"
  },
  transverseRootDiameter: {
    name: "Transverse root diameter",
    formula: "d_{ft} = d_t - 2.5m_n",
    description: "The root diameter on the transverse plane.",
    copyText: "transverse_root_diameter = transverse_pitch_diameter - 2.5 * module"
  },
  internalGearDistanceBetweenCenters: {
    name: "Distance between centers for an external and ring gear pair.",
    formula: 'C = \\frac{d_{ring} - d_{external}}{2}',
    description: 'The distance between the centers of an external and ring gear pair when their pitch circles are tangent.',
    copyText: 'C = (pitch_diameter_internal_gear - pitch_diameter_external_gear) / 2'
  },
} as const;

export const EQUATIONS = Object.fromEntries(
  Object.entries(rawEquations).map(([key, value], index) => [
    key,
    {
      ...value,
      index: index + 1,
    },
  ])
);

export type EquationId = keyof typeof EQUATIONS;
