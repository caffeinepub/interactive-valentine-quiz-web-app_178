# Specification

## Summary
**Goal:** Build a mobile-first, single-page Valentine-themed 5-question multiple-choice love quiz with playful animations, score-based results, and a “Valentine trick” interaction, using a cohesive romantic pastel UI.

**Planned changes:**
- Create a single-page quiz flow with a romantic pastel theme (rounded cards, subtle animations, smooth transitions) and a subtle floating-hearts gradient background across all screens.
- Implement Welcome screen with exact text: title “How Well Do You Know  💖”, subtitle “A tiny test made with love just for you”, and CTA “Start the Love Test →”.
- Implement a 5-question, one-at-a-time MCQ quiz with progress text (e.g., “Question 1/5”) plus progress bar, option micro-interactions, and heart/confetti feedback on correct answers.
- Use the exact provided questions/options/correct answers for all 5 questions.
- Add scoring and route to one of two result screens: perfect (5/5) vs non-perfect (<5).
- Perfect result screen: show exact headline “OMG 5/5!!! 😭💖", display a cute romantic meme image, show the exact date coupon text, and a button “Redeem My Date 💌” that reveals “Your wife will contact you shortly for booking 😉”.
- Non-perfect result screen: show a cute teasing meme image, exact text “Hmm… not perfect 👀\nYou need to do better… ”, then “Will you still be my Valentine? 💘” with buttons “Yes 💖” and “No 😈”.
- Implement the Valentine trick: each “No 😈” click grows “Yes 💖”, shrinks “No 😈”, and updates prompt text to “Are you sure?? 🥺” (first No) then “You have no escape 😌” (second No), continuing scaling until Yes dominates and No is very hard to click.
- When “Yes 💖” is clicked (at any stage), show final celebration screen with exact text “YAY!!! You are my Valentine forever 💖🌹” plus confetti/hearts/romantic animation.
- Add optional audio (gentle background music + subtle SFX) with a visible mute/unmute control; default muted until user enables.
- Ensure the app is accessible via a stable, shareable URL with no login required.
- Include required generated images as static assets under `frontend/public/assets/generated` and reference them directly in the result screens.

**User-visible outcome:** A shareable Valentine quiz experience that starts from a welcome screen, runs through 5 cute MCQs with progress and animations, then shows either a “date coupon” perfect-score screen or a teasing non-perfect screen with the “No” button trick and a final Valentine celebration when “Yes” is chosen.
