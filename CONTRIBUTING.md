# Contributing to VS Code Org Mode

## Pull Request Guidelines

- All changes must be submitted via pull requests.
- PRs that exceed the max changed-lines limit enforced by CI are rejected. The limit is defined in `.github/workflows/pr-size-limit.yml`.
- Large changes must be split into focused, reviewable PRs.
- Bugfix branches must use the `bugfix/` prefix (e.g. `bugfix/short-description`).

## Review Process

- PRs are reviewed by maintainers.
- CI must pass before merge.
- Reviewers may request changes or clarification.

## Pull Request Templates

This repository uses purpose-specific PR templates
to reduce review back-and-forth and improve review quality.

- Bugfix PRs must use the bugfix template.
- Templates explain why information is required, not just what to write.

See `.github/PULL_REQUEST_TEMPLATE/` for details.

## Naming

The full name of this project is `VS Code Org Mode`. It is abbreviated `vscode-org-mode`. In the VS Code Marketplace, it is listed as `Org Mode`.

Commands are prefixed with `org.` and followed by camel case, eg `org.insertHeadingRespectContent`. Command titles are prefixed with `Org: ` and followed by capitalized words separated by spaces, eg `Org: Insert Heading Respect Content`.

Filenames use kebab case, eg `header-functions.ts`.

When referring to the original Org mode, we capitalize the "O" and leave the "m" lower case. This is in keeping with the original team's usage on [orgmode.org](http://orgmode.org/).

## Code Style

Use ESLint with the repository configuration.

## Git Workflow

- `develop` is the default branch for new changes.
- All changes come through pull requests; direct pushes are not expected.
- For new additions, create a feature branch and open a pull request into `develop`.
- Optionally, prefix feature branch names with `feature/`.

## Pull Request Size

The max changed-lines limit is enforced by CI and defined in `.github/workflows/pr-size-limit.yml`.
If a change exceeds that size, split it into smaller, reviewable PRs.
Rationale: https://smartbear.com/resources/case-studies/cisco-systems-collaborator/
