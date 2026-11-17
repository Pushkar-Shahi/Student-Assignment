# Question 4: CSS Transitions, Keyframe Animations, Mobile-First Queries & Scroll Reveal

## Question Statement
**Q4 (Experiment 4)**: Enhance your Practical 2 landing page with CSS transitions, keyframe animations, mobile-first media queries, reduced-motion accessibility, and scroll reveal.

---

## Aim
To add hover/focus transitions, entrance and pulse animations, a CSS spinner, mobile-first breakpoints (768px, 1100px), dark mode, print styles, `prefers-reduced-motion`, and an `IntersectionObserver` scroll reveal.

---

## Features & Implementation
| Feature | Implementation |
| :--- | :--- |
| **Transitions & Keyframes** | Button/card lift, nav `::after` `scaleX`, `rise` entrance animation with stagger delay, `pulse` glow on CTA, and infinite `.spinner` |
| **Media Queries** | 768px tablet layout, 1100px desktop grid bounds, `prefers-color-scheme: dark`, `@media print`, and `prefers-reduced-motion` |
| **Scroll Reveal** | Native `IntersectionObserver` in `app.js` dynamically adds `.is-visible` on viewport scroll |

---

## Project Structure
```text
Question 4/
├── index.html     # Semantic landing page structure
├── style.css      # Mobile-first CSS, keyframe animations, dark mode, reduced motion
├── app.js         # IntersectionObserver scroll-reveal logic
├── NOTES.md       # Viva questions, answers, and technical notes
└── README.md      # Comprehensive documentation
```

---

## Git Workflow
```bash
git add "Question 4"
git commit -m "Question 4: Added CSS transitions, animations, mobile-first queries, and scroll reveal"
git push
```

---

## Result
The page runs with zero console errors, animates hero and card entrances with hover/focus transitions, adapts responsively across 360px, 768px, and 1280px widths, and honours user preferences for dark mode, print output, and reduced motion.
