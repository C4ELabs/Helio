# Helio Coach Design Rulebook

This document contains critical design rules and standards that must be followed across the entire website.

## Color Standards

### Blue Color Standardization

**CRUCIAL RULE:** `#496fb6` is the **ONLY** hex code for blue colors that should be used throughout the entire website.

- **Primary Blue:** `#496fb6`
- **CSS Variable:** `--helio-primary: #496fb6`
- **Dark Blue (same as primary):** `--helio-dark: #496fb6`
- **All blue instances** (buttons, links, headings, accents, borders, etc.) must use this exact hex code
- **RGB equivalent:** `rgba(73, 111, 182, ...)` for any rgba values

#### Previously Used Blue Colors (DEPRECATED - DO NOT USE):
- ❌ `#4870b8` 
- ❌ `#3d5d9a`
- ❌ `#2d4a7a`
- ❌ `#5a85c9`

#### Where This Applies:
- CSS variables (`--helio-primary`, `--helio-dark`)
- All inline styles in React components
- All CSS classes and selectors
- Gradients with blue colors
- Border colors
- Text colors
- Background colors
- Box shadows with blue tints
- Hover states
- Focus states
- All rgba() values referencing blue

#### Enforcement:
- Before adding any blue color, verify it is `#496fb6`
- Search for deprecated blue hex codes when reviewing changes
- If a different blue shade is needed, consult with the design team first

---

### Complete Color Palette

#### Primary Colors
- **Primary Blue:** `#496fb6` (`--helio-primary`)
  - Use for: Primary buttons, links, headings, accents, borders, focus states
  - RGB: `rgba(73, 111, 182, ...)`
  
- **Light Blue/Background:** `#e8ecf5` (`--helio-light`)
  - Use for: Light background sections, subtle accents

- **Dark Blue:** `#496fb6` (`--helio-dark`)
  - Same as primary blue

- **Black:** `#000000` (`--helio-black`)
  - Use for: Primary text, headings

#### Neutral Colors
- **White:** `#ffffff`
  - Use for: Backgrounds, button text on colored backgrounds, cards

#### Usage Guidelines
- Use CSS variables when possible: `var(--helio-primary)`, `var(--helio-light)`, etc.
- For inline styles, use exact hex codes as specified
- Maintain consistent color usage across all components
- Test color contrast ratios for accessibility (WCAG AA minimum)

---

## Typography Standards

### Font Families

#### Heading Font
- **CSS Variable:** `--font-heading`
- **Font Stack:** `'Montserrat', 'Lexend', 'Roboto Flex', sans-serif`
- **Use For:** All heading elements (h1, h2, h3, h4, h5, h6), section headings, feature headings
- **Weight:** 700 (bold) for headings
- **Line Height:**
  - **H1, H2 (Headings):** `1.1 - 1.4` (Recommended: 1.3)
  - **H3, H4+ (Subheadings):** `1.3 - 1.5` (Recommended: 1.4)

#### Display Font
- **CSS Variable:** `--font-display`
- **Font Stack:** `'Montserrat', 'Lexend', sans-serif`
- **Use For:** Navbar brand, display text, prominent headings

#### Body Font
- **CSS Variable:** `--font-body`
- **Font Stack:** `'Lora', 'Lexend', 'Roboto Flex', sans-serif`
- **Use For:** Body text, paragraphs, labels, form inputs, links, lists, most UI text
- **Weight:** 400 (regular) for body text

#### Special Font
- **CSS Variable:** `--font-special`
- **Font Stack:** `'Montserrat', 'Tektur', 'Orbitron', sans-serif`
- **Use For:** Section labels, special callouts, decorative text

#### Button Font
- **CSS Variable:** `--font-button`
- **Font Stack:** `'Montserrat', 'Lexend', 'Roboto Flex', sans-serif`
- **Use For:** All buttons, call-to-action elements
- **Weight:** 500 (medium)

#### Monospace Font
- **CSS Variable:** `--font-mono`
- **Font Stack:** `'Source Code Pro', monospace`
- **Use For:** Code blocks, technical content (if needed)

### Base Typography Settings

- **Base Font Size:** `15px`
- **Base Line Height:** `1.6`
- **Base Font Weight:** `400`
- **Text Rendering:** `optimizeLegibility`
- **Font Smoothing:** Antialiased enabled

### Typography Scale

- **H1:** `2rem` (Desktop: `2.75rem`) - Line Height: `1.3` (range: 1.1-1.4)
- **H2:** `1.75rem` - Line Height: `1.3` (range: 1.1-1.4)
- **H3:** `1.5rem` - Line Height: `1.4` (range: 1.3-1.5)
- **H4:** `1.25rem` - Line Height: `1.4` (range: 1.3-1.5)
- **H5:** `1.1rem` - Line Height: `1.4` (range: 1.3-1.5)
- **H6:** `1rem` - Line Height: `1.4` (range: 1.3-1.5)
- **Lead Text:** `1.05rem` - Line Height: `1.6`
- **Body Text:** `15px` (base) - Line Height: `1.6`
- **Small Text:** `0.875rem` - `0.95rem` - Line Height: `1.6`

### Font Usage Rules

1. **Always use CSS variables** for font families: `font-family: var(--font-heading)`
2. **Headings** must use `--font-heading` or `--font-display`
3. **Body content** must use `--font-body`
4. **Buttons** must use `--font-button`
5. **Maintain font hierarchy** - don't mix heading and body fonts incorrectly
6. **Mobile responsive:** Font sizes should scale appropriately on smaller screens

---

## Performance Standards

### Hero Section Load Time Optimization

**Critical:** The first three seconds of page load are crucial. Essential hero content (text, CTA button) must appear instantly.

#### Image Optimization Requirements:

1. **Lazy Loading:**
   - Hero images use Intersection Observer for lazy loading
   - Images load when entering viewport or after 100ms delay
   - Background images in HeroAlt component lazy load with 100px margin

2. **Image Loading Attributes:**
   - `loading="lazy"` for below-the-fold images
   - `decoding="async"` for non-blocking decode
   - `fetchPriority="low"` for hero images (content loads first)

3. **Progressive Enhancement:**
   - Hero content (text, CTA) renders immediately
   - Images fade in smoothly after loading
   - Placeholder backgrounds prevent layout shift

4. **Image Compression:**
   - All hero images must be compressed before deployment
   - Use tools like:
     - ImageOptim, TinyPNG, or Squoosh for compression
     - Convert to WebP format when possible
     - Target file sizes: < 200KB for hero images
   - Optimize images in `src/assets/images/` before build

5. **CSS Optimizations:**
   - `content-visibility: auto` on hero sections
   - `will-change` and `transform: translateZ(0)` for GPU acceleration
   - Smooth opacity transitions for image loading

#### Enforcement:
- Test hero section load time using Lighthouse (target: < 3s)
- Verify essential content (heading, text, CTA) renders in < 1s
- Images should not block initial render
- Use browser DevTools Network tab to verify lazy loading works

---

Last Updated: 2026-01-XX
