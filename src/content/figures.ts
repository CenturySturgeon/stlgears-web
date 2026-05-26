const rawFigures = {
    leversPrinciple: {
        description: "System in balance due to levers principle",
        path: "../../public/images/theory/levers_principle.svg"
    },
    leversArray: {
        description: "Two lever arrays in a circular configuration",
        path: "../../public/images/theory/lever_array.svg"
    },
    leversArrayWithForces: {
        description: "Simplified version of figure [2] shown as two levers in contact",
        path: "../../public/images/theory/lever_array_wforces.svg"
    },
    tangentialDisks: {
        description: "Two tangent disks horizontally aligned",
        path: "../../public/images/theory/tangent_disks.svg"
    },
    gearMesh: {
        description: "Gear mesh",
        path: "../../public/images/theory/gear_mesh.svg"
    }
}

export const FIGURES = Object.fromEntries(
  Object.entries(rawFigures).map(([key, value], index) => [
    key,
    {
      ...value,
      index: index + 1,
    },
  ])
);