# Portrait Integration & Aesthetic Enhancement Plan

Integrate Eke-Abasi Isangifi's cinematic landscape portrait into the Hero section as a borderless, atmospheric blend on desktop with subtle mobile ambient fading, while featuring the close-up portrait in the About section.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed during the planning phase:

- **Confirmed Decision 1: Dual Portrait Architecture**: Use the 16:9 cinematic landscape portrait in the Hero section blended seamlessly into the background canvas without visible borders or card edges, and feature the 3:4 close-up portrait in the About section.
- **Confirmed Decision 2: Mobile Adaptation**: On small screens, the Hero portrait will transition into a subtle, low-opacity ambient background atmosphere behind the text, ensuring pristine typography legibility while maintaining visual character.

---

## 1. Overview & Core Concept

- **The Vision**: Rather than placing the portrait into an artificial rectangular card, the 16:9 cinematic photography will be organically integrated into the dark-mode layout (`#0a0f0d`). The natural studio rim lighting (warm amber on the left, cool blue on the right) will merge directly into the site's ambient light gradients.
- **Visual Impact**: Gives prospective enterprise clients and employers an immediate impression of executive polish and authenticity, avoiding the generic "boxed avatar" look.

---

## 2. User Experience & Visual Design

```
┌────────────────────────────────────────────────────────────────────────┐
│ NAVBAR (Sticky Blur · Wordmark · Navigation · "Start a Project")       │
├────────────────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                           │
│ ┌───────────────────────────────┐ ┌──────────────────────────────────┐ │
│ │ Eyebrow                       │ │ 16:9 Cinematic Portrait          │ │
│ │ Headline & Subhead            │ │ Seamless Gradient Mask Blend    │ │
│ │ CTAs: Start / View Work       │ │ (Zero hard edges / no borders)   │ │
│ │ Verified Experience Metrics   │ │ Amber & Blue Studio Rim Light    │ │
│ └───────────────────────────────┘ └──────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ 6 PROFESSIONAL CERTIFICATIONS STRIP (Horizontal Ticker)                │
├────────────────────────────────────────────────────────────────────────┤
│ ABOUT SECTION                                                          │
│ ┌───────────────────────────────┐ ┌──────────────────────────────────┐ │
│ │ Mission, Philosophy & Bio     │ │ 3:4 Close-up Portrait            │ │
│ │ "Build. Integrate. Optimise." │ │ Crisp Studio Framing             │ │
│ └───────────────────────────────┘ └──────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Visual Styling & Masking Details
- **Desktop Hero Blend**:
  - Image positioned in a right-aligned container (`absolute right-0 top-0 bottom-0 w-3/5 pointer-events-none`).
  - CSS gradient masking applied: `mask-image: radial-gradient(ellipse at 75% 45%, black 45%, transparent 80%), linear-gradient(to right, transparent, black 35%)`.
  - Zero visible borders, cards, or outlines. The subject emerges naturally from the dark `#0a0f0d` surface.
- **Mobile Viewport Treatment**:
  - Image shifts to a low-opacity (`opacity-20` to `opacity-30`) ambient backdrop behind the hero typography, blended with dark gradients to ensure 100% WCAG AAA text contrast.
- **About Section Presentation**:
  - Uses the 3:4 vertical close-up portrait inside the dedicated 2-column About section.
  - Features subtle ambient gold and emerald rim glow matching the studio lighting.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Organic Gradient Masking vs. Card Frame in Hero**
  - *Chosen Approach*: Multi-stop radial and linear CSS gradient masks.
  - *Why*: Eliminates the artificial "pasted photo" aesthetic and makes the portrait feel bespoke to the page architecture.
  - *Alternative Considered*: Standard rounded card with border. Rejected because it looks boxy and disrupts the typographic flow.
- **Decision 2: Dual Photography Assignment**
  - *Chosen Approach*: 16:9 landscape for Hero atmosphere; 3:4 vertical close-up for About narrative.
  - *Why*: Leverages the natural aspect ratios of both uploaded images without awkward cropping.

---

## 4. Technical Architecture & Implementation Steps

### Asset Pipeline
1. **Hero Asset (`src/data/heroPortrait.ts`)**: Store the high-resolution landscape portrait asset.
2. **About Asset (`src/data/portrait.ts`)**: Update with the crisp 3:4 studio close-up portrait asset.

### Component Updates
1. **`src/components/Hero.tsx`**:
   - Add the ambient masked image layer on desktop with `object-cover` and CSS mask.
   - Maintain the existing left column typography, action buttons, and metric counters with appropriate `z-index`.
   - Implement the subtle mobile ambient fallback layer.
2. **`src/components/AboutSection.tsx`**:
   - Connect the 3:4 close-up portrait image into the portrait container.
   - Retain the minimal browser chrome bar and ambient glow.
3. **Verification**:
   - Verify mobile responsiveness (320px–768px), tablet (768px–1024px), and desktop (1024px–1920px).
   - Run compilation and lint tests.
