function degToRad(degrees: number) {
  return degrees * (Math.PI / 180);
};


export function getPolygonApothem(gearPolygonRadius: number, gearPolygonNumberOfVertices: number) {
  let centralAngle = 2 * Math.PI / gearPolygonNumberOfVertices;
  let apothem = gearPolygonRadius * Math.cos(centralAngle / 2);
  return apothem;
};


export function getGearPolygonRadius(module: number, numberOfTeeth: number, profileShiftCoefficient: number, helixAngle: number = 0) {
  const transverseModule = helixAngle != 0 ? Math.cos(degToRad(helixAngle)) : module;

  const pitchDiameter = transverseModule * numberOfTeeth;
  const profileShiftOffset = 2 * profileShiftCoefficient * module; // Yes it uses the normal module and not the transverse one as it is offset's a distance and it's determined by it
  const transversePitchDiameter = pitchDiameter + profileShiftOffset;
  const transverseRootDiameter = transversePitchDiameter - 2.5 * module; // Yes, uses the normal module since the root height doesn't care about the plane

  const polygonRadius = (transverseRootDiameter / 2) - 0.5;
  return polygonRadius;
};


export const getBevelGearMaxRadius = (module: number, numberOfTeeth: number, numberOfTeethPartner: number,): number => {
  const gama = Math.atan(numberOfTeeth / numberOfTeethPartner);
  return (module * numberOfTeeth) - (2.5 * Math.cos(gama));
};


export function getKeywayTotalRadius(keyWidth: number, boreDiameter: number, boreDiameterPlusKeyHeight: number) {
  const boreRadius = boreDiameter / 2;
  return Math.sqrt(((boreDiameterPlusKeyHeight - boreRadius) ** 2) + (keyWidth ** 2));
};


export function required(value: string | number, message: string = "This field is required.") {
  if (value === undefined || value === null || value === '') {
    return message;
  }
  return null;
};


export function inRange(value: number, min: number, max: number, unit: string, fieldLabel: string = "This field") {
  if (value < min || value > max) {
    return `${fieldLabel} must be in range [${min}${unit}, ${max}${unit}].`;
  }
  return null;
};


export function inStringSet(value: string, set: string[] = [], message: string = "Value is not in allowed list.") {
  if (!set.includes(value)) {
    return message;
  }
  return null;
};