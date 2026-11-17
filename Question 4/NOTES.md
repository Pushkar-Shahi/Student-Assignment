# Viva & Notes: Question 4 (Experiment 4)

## Viva Questions & Answers

| Question | Answer |
| :--- | :--- |
| **Why transform / opacity?** | They run on the GPU compositor without triggering layout reflow or repaint cycles, keeping animations performant at 60 fps. |
| **Transition vs. animation?** | A transition smoothly interpolates between two defined states based on an external trigger (such as `:hover` or `:focus`); an animation uses `@keyframes` for multi-step, automated, or indefinitely looping motion. |
| **Why mobile-first & reduced motion?** | Mobile-first starts from simpler mobile constraints and layers desktop rules progressively via `min-width` queries; `prefers-reduced-motion` prevents vestibular disorders, motion sickness, or discomfort for motion-sensitive users. |

---

## Technical Summary

1. **GPU Acceleration**: Animating `transform: translateY(...)` and `opacity` avoids costly CSS Box Model geometry calculations, preventing jank.
2. **Keyframes Applied**:
   - `rise`: Smooth upward entrance for the hero heading and feature cards.
   - `pulse`: Looping call-to-action glow on the `.cta` button.
   - `spin`: Infinite linear CSS loader spinner.
3. **Scroll Reveal (IntersectionObserver)**:
   - Elements with class `.reveal` observe viewport intersection.
   - When scrolled into view, class `.is-visible` is added and observation ceases (`obs.unobserve`), minimizing CPU usage.
4. **Responsive Breakpoints**:
   - Base: Mobile styles (<768px) with full-width stacked navigation.
   - 768px: Tablet breakpoint returning navigation links into inline flow.
   - 1100px: Desktop container centering and max-width clamping.
5. **Accessibility & Preferences**:
   - `prefers-color-scheme: dark`: Automatic dark theme palette using CSS variables.
   - `print`: Clean print stylesheet hiding interactive UI (navbars, buttons).
   - `prefers-reduced-motion`: Disables all keyframe animations and eliminates transitions for accessibility compliance.
