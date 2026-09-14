# Vortextech WebDev Week 2 — Added Interactivity with JavaScript

Part of my Web Development Internship Track. This week's task focuses on DOM manipulation, events, and basic client-side validation using **vanilla JavaScript** (no frameworks or libraries).

Live Preview = https://contactus.iqraashraf.dev/

https://github.com/user-attachments/assets/33b054f1-26a7-4a26-99e1-c4be01c62a3f

## What I Built

A contact page with two features:

1. **Validated contact form** (Name, Email, Message)
   - Shows an inline error if any field is left empty
   - Validates the email format using a regex pattern
   - On successful validation, clears the form and shows a success message — all without reloading the page

2. **Dark mode / light mode toggle**
   - A button that switches the page's color theme when clicked
   - Light mode uses a sky blue palette; dark mode uses a deep navy blue palette
   - Built with CSS variables and `classList.toggle('dark-mode')` on the `<body>`

## Tech Used

- HTML5
- CSS3 (custom properties / variables for theming)
- Vanilla JavaScript (`addEventListener` only — no inline `onclick` attributes)

## Project Structure

```
├── index.html   # Markup for the contact form and theme toggle button
├── style.css    # Styling + light/dark theme variables
└── script.js    # Form validation logic and dark mode toggle
```

## How to Run It

No build tools or installation needed.

1. Clone or download this repository.
2. Open `index.html` directly in your browser (double-click it, or right-click → Open With → your browser).

That's it — the form validation and theme toggle both work immediately in the browser.

## Testing Notes

I tested the form with:
- An empty submission (all fields blank)
- An invalid email format (e.g. missing `@` or domain)
- Valid data in all fields

And clicked the dark/light mode toggle multiple times to confirm it switches back and forth correctly.
