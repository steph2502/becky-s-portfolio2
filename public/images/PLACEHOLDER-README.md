# Photo placeholders

This site currently uses styled monogram panels ("BAL") instead of real
photos of Becky Anjola Lasore. Two spots are labeled and ready for real
photography:

1. **Hero panel** — `components/Hero.tsx`, the panel on the right side of the
   hero section (desktop) / below the intro text (mobile). Recommended file:
   `public/images/becky-hero.jpg` (portrait orientation, roughly 3:4).
2. **About panel** — `components/About.tsx`, the image block to the left of
   the "About" copy. Recommended file: `public/images/becky-about.jpg`
   (portrait orientation, roughly 4:5).

To swap in real photos:

1. Add the image file(s) to this `public/images/` folder.
2. In the relevant component, replace the placeholder `<div>` block with
   Next.js's `<Image />` component, e.g.:

```tsx
import Image from "next/image";

<Image
  src="/images/becky-hero.jpg"
  alt="Becky Anjola Lasore"
  fill
  className="object-cover"
  priority
/>;
```

3. Keep the surrounding wrapper's `relative` and `aspect-*` classes so the
   image fills the same panel proportions.
