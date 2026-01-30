# Build Instructions

This document describes how to build the VS Code Org Mode extension and create VSIX packages.

## Creating VSIX Packages

To create and install a VSIX package:

```bash
npm ci                                    # Install dependencies
npm install -g @vscode/vsce              # Install vsce (first time only)
vsce package                              # Create VSIX package
code --install-extension org-mode-x.y.z.vsix  # Install in VS Code
```

The VSIX file name is based on the version in `package.json` (e.g., `org-mode-1.1.0-SNAPSHOT.vsix`).

**Note**: `vsce package` automatically compiles TypeScript, so you don't need to run `npm run compile` separately.
