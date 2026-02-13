# Specification

## Summary
**Goal:** Fix the quiz flow so it reliably advances past Question 2 through Question 5, and ensure the final score passed to results is always correct.

**Planned changes:**
- Fix quiz navigation/state transitions so selecting an option on Question 2 advances to Question 3 (and continues through Question 5) after the existing delay/animation behavior.
- Ensure answer options are re-enabled on each newly displayed question (no persistent disabled UI state carried over).
- Correct score/state computation timing so the final score routed to results reflects the true number of correct answers regardless of delays/animations.

**User-visible outcome:** Users can answer all 5 questions in order without the quiz getting stuck, and the results screen reflects the correct final score (perfect vs non-perfect paths).
