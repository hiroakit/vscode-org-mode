## Infra PR Template
<!--
Why this structure:
  - Purpose/Background explains intent and timing.
  - Changes + Impacted Areas show scope and owners to involve.
  - Compatibility highlights risk and rollout needs.
  - Verification documents how correctness was checked.
This reduces review back-and-forth for authors and gives reviewers
the minimum context to assess safety, risk, and test coverage.
-->

### Purpose / Background
<!-- Why is this needed now? Link to incidents, upgrades, or goals. -->

### Changes
<!-- Mark the relevant areas to guide reviewers and routing. -->
- [ ] CI / Workflow
- [ ] Build / Release
- [ ] Coverage / Quality tools
- [ ] Docs / Template / Repo settings
- [ ] Other:

### Impacted Areas
<!-- List files, workflows, or systems affected (scope/blast radius). -->

### Breaking change
<!--
If unsure, choose Yes.
Yes if existing users or workflows must change, e.g.:
  - new required secrets/env/tools
  - minimum version bumps (e.g. Node.js 18+ required)
  - renamed/removed workflows or required config changes
No only if existing users/workflows require zero changes.
-->
- [ ] Yes
- [ ] No

### Verification
<!-- How was this validated? Helps reviewers reproduce or trust checks. -->
- [ ] CI passes
- [ ] Manual checks (if needed):

### Related Issue / PR
<!-- Connects decisions to prior context for future maintainers. -->
