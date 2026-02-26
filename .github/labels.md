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
| type:bug | #0075CA | Something is broken or regressed. |
| type:feature | #0075CA | New or improved user-visible behavior. |
| type:infra | #0075CA | Infrastructure and codebase maintenance (not user-visible). |
| type:planning | #0075CA | Sprint or iteration planning; use with `area:docs` only. |

#### Notes
- `type:infra` covers: tooling, CI, workflows, repository governance (e.g. labels, templates), information infrastructure (e.g. knowledge base, wikis), and refactors or code cleanup with no user-visible behavior change.
- For documentation-only changes, use `type:bug` (fixing errors), `type:feature` (new or improved user-facing docs), or `type:infra` (doc infrastructure); use `area:docs` for scope.

### Area labels
| Label | Color | Use when |
| --- | --- | --- |
| area:core | #0E8A16 | Core extension behavior or commands. |
| area:docs | #0E8A16 | README, docs, or wiki-related changes. |
| area:tests | #0E8A16 | Unit/integration tests. |
| area:ci | #0E8A16 | CI workflows or automation. |
| area:release | #0E8A16 | Changelog or publishing. |
| area:dependencies | #0E8A16 | Dependency updates. |

#### Notes
- Use `type:bug` when a dependency causes a defect, security issue, or regression; use `type:infra` for routine updates, lockfile changes, or policy work.
- A PR labeled with `area:docs` only is treated as a documentation-only change.

### Priority labels
| Label | Color | Use when |
| --- | --- | --- |
| priority:p0 | #FEF2C0 | Data loss, security issue, or crash. |
| priority:p1 | #FEF2C0 | Major feature broken or severe regression. |
| priority:p3 | #FEF2C0 | Nice-to-have or low urgency. |

#### Notes
- Normal priority items intentionally have no label to keep triage fast.
- Priority is not always determined by the reporter.

### Status labels
| Label | Color | Use when |
| --- | --- | --- |
| status:needs-triage | #C5DEF5 | New issue awaiting initial triage. |
| status:needs-info | #C5DEF5 | Reporter must provide more details. |
| status:in-progress | #C5DEF5 | Actively being worked on. |
| status:blocked | #C5DEF5 | Blocked by external dependency or decision. |
| status:ready | #C5DEF5 | Ready to pick up or to implement. |

### Special labels (unprefixed)
| Label | Color | Use when |
| --- | --- | --- |
| duplicate | #7057FF | This issue or pull request already exists. |
| good first issue | #7057FF | Suitable for first-time contributors. |
| help wanted | #7057FF | Maintainers want external help. |

## Label examples for pull requests

| Case | type | area |
| --- | --- | --- |
| Adding a new feature to the VSCode extension | type:feature | area:core, area:tests |
| Improving the VSCode extension | type:feature | area:core, area:tests |
| Feature or improvement with documentation updates | type:feature | area:core, area:docs |
| Fixing a bug in the VSCode extension (code and tests) | type:bug | area:core, area:tests |
| Fixing a bug and updating docs in the same PR | type:bug | area:core, area:docs (and area:tests if applicable) |
| Fixing an error or gap in documentation only | type:bug | area:docs |
| PR only expands test code | type:infra | area:tests |
| Repository operations or governance (e.g. labels, triage, templates) | type:infra | area:docs (or area:ci etc. by scope) |

## Triage workflow
This workflow applies to issues only. Pull requests are expected to have `type:` and `area:` set at creation time; `status:` is optional on pull requests.

1. New issue arrives with `status:needs-triage`.
2. Add `type:` and `area:`.
3. Add `priority:` only if it is p0, p1, or p3.
4. Set `status:` to `ready`, `needs-info`, or `blocked`.
5. Set `status:in-progress` when work starts.

## Label lifecycle
- Keep the list minimal and stable.
- Update this document whenever labels change.
