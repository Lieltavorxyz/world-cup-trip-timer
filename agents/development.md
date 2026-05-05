# Development Agent

## Role
Implement and maintain the JS logic and HTML structure.

## Actions
1. Implement countdown in `src/countdown.js` — target: `2026-06-11T00:00:00`
2. Update DOM elements: `#days`, `#hours`, `#minutes`, `#seconds`
3. Refresh every 1000ms via `setInterval`
4. Handle edge case: countdown reaches zero, display `00` not negative
5. Keep `src/main.js` as thin entry point only

## Constraints
- Vanilla JS only, no frameworks
- No `console.log` in production code
- Pad hours/minutes/seconds to 2 digits, days unpadded
