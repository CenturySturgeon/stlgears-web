---
title: 'Gear milling'
description: 'Learn the simplest method of gear manufacturing'
order: 5
---

Milling stands as one of the most prevalent manufacturing processes today. It employs a milling machine, where the material remains stationary while the tool, or cutter, rotates and moves. In the context of gear manufacturing, milling predominantly serves to create spur gears, utilizing an involute cutter to shape their teeth. Although milling can be used to manufacture other gear types such as helical or straight bevel gears, it requires complex setups for the milling machine. Understanding this process is really helpful for mastering gear geometry, as it facillitates the comprehension of more intricate concepts.

![{{fig:profileShiftMilling.description}}](../../public/images/theory/profile_shift_milling.svg)

The key concept to grasp is that the involute cutter shapes the gear teeth by cutting the spaces between them, illustrated below. Each tooth is created by making a cut, rotating the material, and repeating the process until all teeth are formed. Because the shape of the cutter is an involute and the involute changes with the number of teeth (a higher teeth count makes them resemble those of a rack), a single cutter cannot be used for every gear. These properties are further explored in the gear cutter section.

It's also important to note that, like in all manufacturing processes, imperfections and operator errors are expected and must be considered. However, the involute curve possesses a unique property: it's a conjugated profile. While the mathematical concept may be challenging, in practice, this means that slight errors in the distance between gear centers have minimal impact. This allows for deliberate modifications to the gear geometry to better suit mechanical systems, detailed in the **profile shifting** section.

Gear manufacturing is an extensive subject, so only essential information is covered on STLGears.com. For those seeking deeper insights, Ivan Law's "Gears and Gear Cutting" is an excellent book that delves into gear manufacturing techniques.

### Gear cutters

In gear milling, specialized involute cutters are used to shape the spaces between gear teeth. These cutters resemble disks with teeth arranged around their circumference and are typically found in sets of 8. It's important to note that neither the pressure angle nor the module of the cutters can be adjusted.

The necessity for multiple cutters arises from the nature of the involute curve itself. In a set of involute cutters, you'll notice that each cutter can generate only a relatively small range of teeth, especially for gears with a low tooth count. However, as the desired number of teeth increases, the cutters can handle a wider range.This is because, **as the number of teeth increases, their shape begins to resemble that of a rack**.

- This phenomenon can be explained by a simple mathematical concept: the shape of the gear teeth represents only a portion of the involute curve generated at the base diameter. As the base diameter increases while maintaining the same module (meaning more teeth), so does the size of the involute curve itself. However, the size of the involute portion for each tooth remains constant (the radial difference between the base and addendum radii), making the curvature of the involute less pronounced. This is akin to our perception of the curvature of the earth; the ground appears flat because it represents only a small portion of a larger curve.

Understanding this concept might be challenging, so the image below provides a visual illustration for clarity:

![{{fig:numberOfTeethComparisson.description}}](../../public/images/theory/z_comparisson.svg)

As illustrated above, as the number of teeth in a gear goes up, their shape resembles more and more the trapezoidal shape of the teeth in a rack. 

- You could say that, in essence, a rack is a portion of a gear with an infinite amount of teeth.

### Profile shifting

Profile shifting is a machining technique where the cutter's depth is adjusted outward or inward during the cutting process, resulting in subtle alterations to the tooth profile of the gear. This technique presents significant advantages, especially in applications where the distance between gear centers needs to be modified while preserving the desired base parameters $$m, z, \alpha, \beta$$. Furthermore, the resulting modifications to the tooth profile can prove beneficial, as they also impact the tooth thickness.

![{{fig:profileShiftCutterDistance.description}}](../../public/images/theory/profile_shift_milling.svg)