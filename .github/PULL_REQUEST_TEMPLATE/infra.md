<!--
This template is structured to match the reviewer's mental model
and reduce review back-and-forth.

Reviewer context (infra review order):
1. Overview - what is changing and why
2. Changes - which infra areas are touched
3. Impacted Areas - scope/blast radius and owners
4. Breaking Change - compatibility risks and migrations
5. Verification - evidence of correctness
-->

<!--
Why headers start at H2:
- The PR title is treated as the H1 for the page, so template sections begin at H2.
- GitHub style guide (Headers) states:
  "Headers must adequately describe the content under them. Headers can either follow the guidelines for writing titles or can be written as questions. Use sentence casing for headers.
  If an article has headers, the headers must start with an H2 level header. You can use H3 and H4 level headers to further organize content into related groups, but you cannot skip header levels. There must be text content between a header and subheader, such as an introduction."
  Source: https://docs.github.com/en/enterprise-server@3.15/contributing/style-guide-and-content-model/style-guide?utm_source=chatgpt.com#headers
-->

<!--
PR size policy:
The max changed-lines limit is enforced by CI and defined in
.github/workflows/pr-size-limit.yml (maxChangedLines).
If an infra change requires more changes, split it into focused PRs
and link them in the Related Issues / PRs section before requesting review.
-->

## Infra Overview
<!--
Required. In 1-3 short sentences (~200-400 characters), explain intent and timing.

Include:
- Why this change is needed (incident, upgrade, maintenance)
- What will improve for developers/users
- Any constraints or deadlines
-->

## Changes
<!-- Mark the relevant areas to guide reviewers and routing. -->
- [ ] CI / Workflow
- [ ] Build / Release
- [ ] Coverage / Quality tools
- [ ] Docs / Template / Repo settings
- [ ] Other:
- Notes / links:

## Impacted Areas
<!--
This section clarifies scope (where changes ripple).
Infra changes often affect more than the diff suggests, so this helps reviewers
decide who should be involved and what to scrutinize.

Examples:
- Files / workflows: changed files or CI workflows
- Systems / services: Codecov, GitHub Actions, external SaaS
- Teams / owners: relevant teams or maintainers (if any)
-->
- Files / workflows:
- Systems / services:
- Teams / owners (if applicable):

## Breaking Change
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
- Mitigation / rollout notes (if Yes):

## Verification
<!-- How this was validated. Helps reviewers reproduce or trust checks. -->
- [ ] CI passes
- [ ] Manual checks (if needed):
- [ ] Dry run or staging validation (if applicable)
- Notes (commands, environments):

## Related Issues / PRs
<!-- Connects decisions to prior context for future maintainers. -->
- Issue:
  - #
- Related PRs:
  - #
