# GitHub Label Operations

## Goals
- Keep triage consistent and fast.
- Route work to the right owners.
- Make priority and scope obvious at a glance.
- Support reporting and release planning.

## Naming and hygiene rules
- Use lowercase and hyphens.
- Use a single prefix per label group: `type:`, `area:`, `priority:`, `status:`, `size:`.
- Avoid duplicates or near-synonyms. Prefer one label per axis.
- Do not repurpose labels. If a label changes meaning, create a new one.

## Required labeling

### Issues
- Exactly one `type:` label.
- Exactly one `priority:` label.
- Exactly one `status:` label.
- At least one `area:` label (use `area:extension` if unclear).
- Optional: `size:` once the scope is known.

### Pull requests
- Exactly one `type:` label.
- At least one `area:` label.
- Exactly one `size:` label.
- Optional: `priority:` and `status:` labels.

## Label catalog

### Type labels
| Label | Color | Use when |
| --- | --- | --- |
| type:bug | #D73A4A | Something is broken or regressed. |
| type:feature | #1D76DB | New user-visible behavior. |
| type:enhancement | #A2EEEF | Improvements to existing behavior. |
| type:docs | #0075CA | Documentation-only changes or requests. |
| type:test | #C2E0C6 | Test additions, fixes, or refactors. |
| type:maintenance | #F9D0C4 | Refactors, cleanup, tooling, or chores. |

### Area labels
| Label | Color | Use when |
| --- | --- | --- |
| area:extension | #0E8A16 | General extension behavior or commands. |
| area:outline-folding | #0E8A16 | Outline view, folding, navigation. |
| area:syntax-highlighting | #0E8A16 | Grammar, tokens, or syntax colors. |
| area:todo | #0E8A16 | TODO keyword handling and cycling. |
| area:timestamps | #0E8A16 | Date/time parsing, formatting, or commands. |
| area:docs | #0E8A16 | README, docs, or wiki-related changes. |
| area:tests | #0E8A16 | Unit/integration tests. |
| area:ci | #0E8A16 | CI workflows or automation. |
| area:release | #0E8A16 | Changelog or publishing. |
| area:dependencies | #0E8A16 | Dependency updates. |

### Priority labels
| Label | Color | Use when |
| --- | --- | --- |
| priority:p0 | #B60205 | Data loss, security issue, or crash. |
| priority:p1 | #D93F0B | Major feature broken or severe regression. |
| priority:p2 | #FBCA04 | Default priority for normal work. |
| priority:p3 | #FEF2C0 | Nice-to-have or low urgency. |

### Status labels
| Label | Color | Use when |
| --- | --- | --- |
| status:needs-triage | #C5DEF5 | New issue awaiting initial triage. |
| status:needs-info | #BFDADC | Reporter must provide more details. |
| status:blocked | #B60205 | Blocked by external dependency or decision. |
| status:in-progress | #5319E7 | Actively being worked on. |
| status:ready | #0E8A16 | Ready to pick up or to implement. |

### Size labels
| Label | Color | Use when |
| --- | --- | --- |
| size:xs | #BFDADC | 1-10 lines changed. |
| size:s | #BFDADC | 11-50 lines changed. |
| size:m | #BFDADC | 51-150 lines changed. |
| size:l | #BFDADC | 151-300 lines changed. |
| size:xl | #BFDADC | 301-400 lines changed (max). |

### Special labels (unprefixed)
| Label | Color | Use when |
| --- | --- | --- |
| good first issue | #7057FF | Suitable for first-time contributors. |
| help wanted | #008672 | Maintainers want external help. |

## Triage workflow
1. New issue arrives with `status:needs-triage`.
2. Add `type:` and `area:` labels.
3. Assign `priority:` based on impact.
4. Set `status:` to `ready`, `needs-info`, or `blocked`.
5. Add `size:` once the scope is understood.

## Label lifecycle
- Add a label only when it has a clear, lasting use case.
- Update this document whenever the label set changes.
- Remove unused labels during quarterly cleanup.
