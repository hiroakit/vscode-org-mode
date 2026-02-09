# GitHub Labels

## Goals
- Keep triage consistent and fast.
- Make priority and ownership obvious.
- Keep the label set small.

## Naming rules
- Use lowercase and hyphens.
- One prefix per group: `type:`, `area:`, `priority:`, `status:`.
- One label per group.
- Do not repurpose labels. Create a new one if meaning changes.

## Required labeling

### Issues
- Exactly one `type:` label.
- Exactly one `area:` label.
- Exactly one `status:` label.
- Add a `priority:` label only when it is higher or lower than normal.

### Pull requests
- Exactly one `type:` label.
- At least one `area:` label.
- Optional: `priority:` and `status:` labels.

## Label catalog

### Type labels
| Label | Color | Use when |
| --- | --- | --- |
| type:bug | #D73A4A | Something is broken or regressed. |
| type:feature | #1D76DB | New user-visible behavior. |
| type:docs | #0075CA | Documentation-only changes or requests. |
| type:maintenance | #F9D0C4 | Refactors, cleanup, tooling, or chores. |
| type:planning | #BFDADC | Iteration planning or roadmap work. |

### Area labels
| Label | Color | Use when |
| --- | --- | --- |
| area:core | #0E8A16 | Core extension behavior or commands. |
| area:docs | #0E8A16 | README, docs, or wiki-related changes. |
| area:tests | #0E8A16 | Unit/integration tests. |
| area:ci | #0E8A16 | CI workflows or automation. |
| area:release | #0E8A16 | Changelog or publishing. |
| area:dependencies | #0E8A16 | Dependency updates. |

### Priority labels
Normal priority items intentionally have no label to keep triage fast.
Priority is not always determined by the reporter.
| Label | Color | Use when |
| --- | --- | --- |
| priority:p0 | #B60205 | Data loss, security issue, or crash. |
| priority:p1 | #D93F0B | Major feature broken or severe regression. |
| priority:p3 | #FEF2C0 | Nice-to-have or low urgency. |

### Status labels
| Label | Color | Use when |
| --- | --- | --- |
| status:needs-triage | #C5DEF5 | New issue awaiting initial triage. |
| status:needs-info | #BFDADC | Reporter must provide more details. |
| status:in-progress | #5319E7 | Actively being worked on. |
| status:blocked | #B60205 | Blocked by external dependency or decision. |
| status:ready | #0E8A16 | Ready to pick up or to implement. |

### Special labels (unprefixed)
| Label | Color | Use when |
| --- | --- | --- |
| good first issue | #7057FF | Suitable for first-time contributors. |
| help wanted | #008672 | Maintainers want external help. |

## Triage workflow
1. New issue arrives with `status:needs-triage`.
2. Add `type:` and `area:`.
3. Add `priority:` only if it is p0, p1, or p3.
4. Set `status:` to `ready`, `needs-info`, or `blocked`.
5. Set `status:in-progress` when work starts.

## Label lifecycle
- Keep the list minimal and stable.
- Update this document whenever labels change.
