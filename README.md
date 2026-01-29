# VS Code Org Mode
[![Version](https://vsmarketplacebadges.dev/version/vscode-org-mode.org-mode.svg)](https://marketplace.visualstudio.com/items?itemName=vscode-org-mode.org-mode)
[![Installs](https://vsmarketplacebadges.dev/installs/vscode-org-mode.org-mode.svg)](https://marketplace.visualstudio.com/items?itemName=vscode-org-mode.org-mode)
[![Ratings](https://vsmarketplacebadges.dev/rating/vscode-org-mode.org-mode.svg)](https://marketplace.visualstudio.com/items?itemName=vscode-org-mode.org-mode)
[![CI](https://github.com/hiroakit/vscode-org-mode/actions/workflows/ci.yml/badge.svg)](https://github.com/hiroakit/vscode-org-mode/actions/workflows/ci.yml)
[![codecov](https://img.shields.io/codecov/c/github/vscode-org-mode/vscode-org-mode?branch=master)](https://codecov.io/gh/vscode-org-mode/vscode-org-mode)
[![License](https://img.shields.io/github/license/vscode-org-mode/vscode-org-mode)](./LICENSE.txt)

:warning: The publisher name was changed, **tootone/org-mode has become vscode-org-mode/org-mode** :warning:

VS Code Org Mode is an extension for Visual Studio Code inspired by the venerable [Org mode for Emacs](http://orgmode.org/). Org lets you keep notes, maintain TODO lists, and author documents, all in plain text.

We welcome issues, feature requests, and contributions to the [repo](https://github.com/vscode-org-mode/vscode-org-mode).

## Features

### Keep Notes

Create outlines:

![outlines](images/screenshots/01_outlines.gif)

Promote and demote items:

![promote_demote](images/screenshots/02_promote_demote.gif)

### Maintain TODO Lists

Create TODOs:

![create todos](images/screenshots/03_create_todos.gif)

Change TODO status:

![cycle todo status](images/screenshots/04_cycle_todo_status.gif)

Customize your TODO Keywords:

![custom todos](images/screenshots/05_customize_todo_keywords.gif)

Insert timestamps:

![timestamps](images/screenshots/06_insert_timestamps.gif)

Modify dates:

![modify dates](images/screenshots/07_modify_dates.gif)

### Author Documents

Style your text:

![style text](images/screenshots/08_style_text.gif)

Add metadata with a snippet:

![add metadata](images/screenshots/09_add_metadata.gif)

Add links with a snippet:

![add links](images/screenshots/10_add_links.gif)

Add comments:

![add comments](images/screenshots/11_add_comments.gif)

## Settings

### Keybindings

All actions in VS Code Org mode come packaged with default keybindings. These can be modified in your `keybindings.json` file.

### Custom TODO Keywords

TODO keywords can be customized in `settings.json`. For example:
```json
"org.todoKeywords": [
    "TODO",
    "DONE",
    "WAIT",
    "SCHD"
]
```

## Installation

Org Mode can be installed in a number of ways:
  - Launch VS Code Quick Open (Linux / Windows: <kbd>ctrl</kbd>+<kbd>P</kbd>; Mac: <kbd>cmd</kbd>+<kbd>P</kbd>) and type `ext install org-mode`.
  - Search for `org mode` in the `Extensions` view in VS Code.

![install](images/screenshots/14_install.gif)

## Activation

The extension can be activated in two ways:
1. Save a file with the extension `.org`.
2. Change the language mode to `Org` by either
    - Clicking in the lower right corner to the left of the smiley face
    - Typing `change language mode` into the command palette
    - Using the default shortcut
        - Linux / Windows: <kbd>ctrl</kbd>+<kbd>k</kbd> <kbd>m</kbd>
        - Mac: <kbd>cmd</kbd>+<kbd>k</kbd> <kbd>m</kbd>

## Docs

Detailed documentation is kept in the [GitHub Wiki](https://github.com/vscode-org-mode/vscode-org-mode/wiki).

## Contributing

We welcome issues, feature requests, and pull requests.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.
It explains our PR guidelines, review process, and required templates.

## Gratitude

The original Org mode was written for Emacs by Carsten Dominik, with the help and support of [an impressive list of geniuses](http://orgmode.org/org.html#History-and-Acknowledgments). Our work is inspired by though not associated with their original masterpiece. In addition, many aspects of the extension were inspired by [the Spacemacs Org layer](https://github.com/syl20bnr/spacemacs/tree/master/layers/%2Bemacs/org).

Our unicorn icon is based on an image by [M. Turan Ercan](https://thenounproject.com/mte/) for [the Noun Project](https://thenounproject.com/). We're grateful to them for making the image available under the Creative Commons license.

## License

This work is available under the [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html).

## Requirements

Install the extension. The rest will be taken care of.

## Known Issues

### Colorization

Colorization, bolding, italicization, and other modes of highlighting are handled differently by different themes. We have prioritized supporting the default VS Code themes (Dark+ and Light+). This prioritization means that some colors may not appear as expected in other themes, or that opportunities for more variance have been missed.

### Others

See [GitHub Issues](https://github.com/vscode-org-mode/vscode-org-mode/issues).

## Release Notes

See [CHANGELOG.md](https://github.com/vscode-org-mode/vscode-org-mode/blob/develop/CHANGELOG.md).
