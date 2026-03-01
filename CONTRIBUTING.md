# Contributing to VS Code Org Mode

## Pull Request Guidelines

- All changes must be submitted via pull requests.
- Branch names must follow the Git Workflow section below.
- Use the appropriate PR template from [PULL_REQUEST_TEMPLATE](https://github.com/hiroakit/vscode-org-mode/tree/develop/.github/PULL_REQUEST_TEMPLATE/).
  - Bugfix PRs must use the bugfix template.
  - Infra PRs must use the infra template.
  - Templates explain why information is required, not just what to write.
- Write PR titles and descriptions in US English.
- Write commit messages in English.
- If changes are expected to affect product or test code, run `npm ci`, `npm test`, and `npx @vscode/vsce package` for verification.
- Run verification before `git push`.
- Keep PRs within the max changed-lines limit enforced by CI and defined in [.github/workflows/pr-size-limit.yml](https://github.com/hiroakit/vscode-org-mode/blob/develop/.github/workflows/pr-size-limit.yml).
  If a change exceeds that size, split it into smaller, reviewable PRs.
  Rationale: https://smartbear.com/resources/case-studies/cisco-systems-collaborator/

## Issue triage and labels

We maintain a label taxonomy for consistent triage and routing.
See [.github/labels.md](./.github/labels.md) for the full label catalog
and usage rules.

## Review Process

- PRs are reviewed by maintainers.
- CI must pass before merge.
- Reviewers may request changes or clarification.

## Coverage reporting

We use Codecov (https://app.codecov.io/github/hiroakit/vscode-org-mode) to report code coverage in pull requests.
Coverage reports are informational only and do not block CI.

## Naming

The full name of this project is `VS Code Org Mode`. It is abbreviated `vscode-org-mode`. In the VS Code Marketplace, it is listed as `Org Mode`.

Commands are prefixed with `org.` and followed by camel case, eg `org.insertHeadingRespectContent`. Command titles are prefixed with `Org: ` and followed by capitalized words separated by spaces, eg `Org: Insert Heading Respect Content`.

Filenames use kebab case, eg `header-functions.ts`.

When referring to the original Org mode, we capitalize the "O" and leave the "m" lower case. This is in keeping with the original team's usage on [orgmode.org](http://orgmode.org/).

## Code Style

Use ESLint with the repository configuration.

## Building the extension

To create a VSIX package or build the extension locally, see [BUILD.md](BUILD.md).

## Git Workflow

- `develop` is the default branch for new changes.
- All changes come through pull requests; direct pushes are not expected.
- For new additions, create a feature branch and open a pull request into `develop`.
- Optionally, prefix feature branch names with `feature/`.
- Bugfix branches must use the `bugfix/` prefix (e.g. `bugfix/short-description`).
- Infra branches must use the `infra/` prefix (e.g. `infra/short-description`).
  - Use `infra/` for repo or process work such as docs, CI, tooling,
    templates, release automation, or dependency maintenance.
