const rawFigures = {
    leversPrinciple: {
        description: "System in balance due to levers principle",
        path: "/images/theory/levers_principle.svg"
    },
    leverArrays: {
        description: "Two lever arrays in a circular configuration",
        path: "/images/theory/lever_array.svg"
    },
    leverArraysWithForces: {
        description: "Simplified version of figure [{{fig:leversArray.index}}] shown as two levers in contact",
        path: "/images/theory/lever_array_wforces.svg"
    },
    tangentialDisks: {
        description: "Two tangent disks horizontally aligned",
        path: "/images/theory/tangent_disks.svg"
    },
    gearWithRadii: {
        description: "Gear with core radii highlithed",
        path: "/images/theory/gear_with_radii.svg"
    },
    gearMesh: {
        description: "Simple two-gear mesh",
        path: "/images/theory/gear_mesh.svg"
    }
}

const figuresWithIndex = Object.entries(rawFigures).map(([key, value], index) => ({
    key,
    ...value,
    index: index + 1,
}));

// Descriptions can reference other figures, resolve them
const processedFigures = figuresWithIndex.map((fig) => {
    let processedDescription = fig.description;
    processedDescription = processedDescription.replace(
        /\{\{fig:([^}.]+)(?:\.([^}]+))?\}\}/g,
        (match, id, property) => {
            const refFig = figuresWithIndex.find((f) => f.key === id);
            if (!refFig) return match;
            if (property) {
                const val = (refFig as any)[property];
                return val !== undefined ? String(val) : match;
            }
            return String(refFig.index); // Default to index if no property
        }
    );
    return { ...fig, description: processedDescription };
});

export const FIGURES = Object.fromEntries(
    processedFigures.map((fig) => [fig.key, fig])
);