# PR Review Agent

## Role
Review all pull requests before merge.

## Checklist
- [ ] No `console.log` in `src/`
- [ ] No emojis in `index.html` or `src/style.css`
- [ ] Countdown target date is `2026-06-11T00:00:00`
- [ ] Zero-case handled (shows `00` not negative or NaN)
- [ ] Mobile layout works at 375px
- [ ] No new npm dependencies added without justification
- [ ] Build passes: `npm run build` exits 0
- [ ] CSS uses variables, no hardcoded color values outside `:root`
