// src/content/equations.ts

export const EQUATIONS = {
  pythagoras: {
    number: 1,
    name: "Pythagoras theorem",
    formula: 'a^2 + b^2 = c^2',
    description: 'The fundamental relationship in Euclidean geometry among the three sides of a right triangle.',
    copyText: 'a^2 + b^2 = c^2'
  },
  quadratic: {
    number: 2,
    name: "Quadratic general formula",
    formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    description: 'The solution to a quadratic equation.',
    copyText: 'x = (-b ± √(b^2 - 4ac)) / 2a'
  }
} as const;

export type EquationId = keyof typeof EQUATIONS;