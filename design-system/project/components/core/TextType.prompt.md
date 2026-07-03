Typewriter effect for the hero subhead — types out, optionally loops with a delete/retype cycle, blinking cursor.

```jsx
<TextType
  text={["Building one of biggest Indonesia e-commerce industry for over 7 years."]}
  typingSpeed={20}
  loop={false}
/>
```

Notable: source (`components/TextType.tsx`) uses GSAP for the cursor blink tween; this version uses a CSS `@keyframes` blink to stay dependency-free — same visual result. Hero usage is `loop={false}` (types once and stops).
