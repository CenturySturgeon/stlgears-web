---
title: 'Helical gears'
description: 'Diving into the advantages of curved teeth gears'
order: 4
---

Helical gears are named for their teeth, which follow a helical path. This design has several advantages over other types of gears:

- Helical gears run **smoother and quieter**.
- They can **handle higher loads**.
- Since helical gears tend to have more teeth in contact at any given time, they experience less wear and last longer.
- They can transfer motion between non-paralel axes, a configuration known as **screw gearing**.

Despite their seemingly complex appearance, helical gears are essentially modified versions of spur gears, as we will demonstrate in this section.

- **Note**: It is my personal opion that spur gears should be viewed as a helical gear variant (helix angle equal to zero) and not the other way around.

### Helix curve

The key feature to understand in helical gears is the helx curve trajectory that their teeth follow. 

A helix is a three dimensional curve that resembles a spiral or a coiled spring. It is a curve that lies on a cylinder or cone, and it has a constant slope or pitch along its length. 

The parametric equations of the helix stand as follows:

$$
X = r \cdot \cos(t)
$$

$$
Y = r \cdot \sin(t)
$$

$$
Z = b \cdot t
$$

Where $$t$$ controls the circular span of the helix and $$b$$' is a parameter that controls the vertical advance of the helix alongside $$t$$ in the Z axis (the "pitch"):

$$
0 \leq t \leq 2\pi
$$

![{{fig:gearWithHelix.description}}](../../public/images/theory/gear_with_helix.svg)

From figure {{fig:gearWithHelix.index}} you can visualize that the pitch "$$P_h$$" is the distance between the start and the end of the curve at one revolution:

$$
P_h = \pi \cdot D \cdot  {\cos(\beta)\over \sin(\beta)}
$$

Where 
- $$\beta$$ stands for the helix angle. 
    - The helix angle controls the steepness of the helix and redirects a portion of the applied force to the axis, giving helical gears the ability to handle more load. 
    - Because of this axial force, special bearings are required to handle it.

- $$D$$ is the diameter of the helix.
    - If you where to view the helix from above you would see a perfect circle (granted it at least completes a revolution).

![{{fig:helixAngle.description}}](../../public/images/theory/helix_angle.svg)

In figure {{fig:helixAngle.index}}, the teeth of the gear are represented by two gray lines, and their inclination is determined by the helix angle. The steeper the helix angle, the greater the inclination of the teeth, which for a gear holding its pitch diameter results as a reduction in the pitch. Taking all of this, the helix parametric equations of a gear can be defined as:

{{eq:gearHelixXAxis}}

{{eq:gearHelixYAxis}}

{{eq:gearHelixZAxis}}

{{eq:gearHelixPitch}}

Where

$$
0 \leq t \leq 2\pi
$$

In this new set of equations, $$b$$ was replaced for a new expression. This new definition for $$b$$ makes it so that the total height of the helix caps at the pitch when it completes a full revolution. It may seem strange, but this is made to ensure that at one revolution, meaning when $$t$$ is equal to $$2\pi$$, the vertical distance between the start and ending points of the helix is equal to the pitch.
