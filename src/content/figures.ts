const rawFigures = {
    leversPrinciple: {
        description: "System in balance due to levers principle",
        path: "/images/theory/levers_principle.svg",
    },
    leverArrays: {
        description: "Two lever arrays in a circular configuration",
        path: "/images/theory/lever_array.svg",
    },
    leverArraysWithForces: {
        description: "Simplified version of Figure {{fig:leverArrays.index}} shown as two levers in contact",
        path: "/images/theory/lever_array_wforces.svg",
    },
    tangentialDisks: {
        description: "Two tangent disks horizontally aligned",
        path: "/images/theory/tangent_disks.svg",
    },
    gearWithRadii: {
        description: "Gear with core radii highlithed",
        path: "/images/theory/gear_with_radii.svg",
    },
    gearMesh: {
        description: "Simple two gear mesh",
        path: "/images/theory/gear_mesh.svg",
    },
    rackToothGeometry: {
        description: "Rack tooth geometry",
        path: "/images/theory/rack_geometry.svg",
    },
    toothInFunctionOfModule: {
        description: "Toot dimmensions in function of the module",
        path: "/images/theory/graphic_module.svg",
    },
    toothTotalHeight: {
        description: "Tooth total height",
        path: "/images/theory/module_h.svg",
    },
    pressureAngleEffectsOnToothGeometry: {
        description: "Pressure angle effects on tooth geometry",
        path: "/images/theory/pressure_angles.svg",
    },
    involuteOfCircle: {
        description: "Involute of a circle",
        path: "/images/theory/involute.svg",
    },
    rotatedInvoluteOfACircle: {
        description: "Involute of a circle rotated 90 degrees",
        path: "/images/theory/90deg_involute.svg",
    },
    involuteRollAngle: {
        description: "Involute roll angle",
        path: "/images/theory/involute_roll_angle.svg",
    },
    toothThicknessAtRadius: {
        description: "Tooth thickness at an arbitrary radius",
        path: "/images/theory/tooth_thickness.svg",
    },
    angularToothThicknessAtRadius: {
        description: "Angular tooth thickness at an arbitrary radius",
        path: "/images/theory/tooth_thickness_angle.svg",
    },
    transmissionRatioRelationships: {
        description: "Transmission relationships in a two gear mesh",
        path: "/images/theory/transmission_mesh.svg",
    },
    gearTrain: {
        description: "Simple gear train",
        path: "/images/theory/linear_gear_train.svg",
    },
    compoundGearTrain: {
        description: "Compound gear train",
        path: "/images/theory/compound_gear_train.svg"
    },
    reducerTrain: {
        description: "Compound gear train reducer",
        path: "/images/theory/compound_gear_train_reducer.svg",
    },
    gearWithHelix: {
        description: "Helix representation in a 2D gear",
        path: "/images/theory/gear_with_helix.svg",
    },
    helixAngle: {
        description: "Helix angle in a gear with a single tooth",
        path: "/images/theory/helix_angle.svg",
    },
    helicalMilling: {
        description: "Helical gear milling setup",
        path: "/images/theory/helical_milling.svg",
    },
    helicalModules: {
        description: "Helical gear modules at different planes",
        path: "/images/theory/helical_modules.svg",
    },
    gearMilling: {
        description: "Gear cutter & milling",
        path: "/images/theory/gear_milling.svg",
    },
    gearCutterProfile: {
        description: "Gear cutter profile",
        path: "/images/theory/cutter_profile.svg",
    },
    gearCutterRotated: {
        description: "Projection of the rotated profile of a gear cutter",
        path: "/images/theory/inclined_cutter_profile.svg",
    },
    gearCutterRotatedResult: {
        description: "Inclined gear cutter profile impact on tooth geometry",
        path: "/images/theory/inclined_cutter_teeth_profile.svg",
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