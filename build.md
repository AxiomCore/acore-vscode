# Building Acore

This guide explains how to build the modified Pkl Core (Acore), the LSP, and bundle them into the VS Code extension.

## Prerequisites

1.  JDK 22+
2.  Node.js 18+ & NPM
3.  Python 3 (for the Axiom Bridge extractor)

## Step 1: Build Pkl Core (Acore)

Navigate to your modified pkl repo root:

```bash
# Build the core project and publish it to your local maven repo
# so the LSP build can pick it up
./gradlew :pkl-core:publishToMavenLocal
```

## Step 2: Build the LSP

Navigate to the `pkl-lsp` directory (or run from root if monorepo):

```bash
# Build the shadow JAR (fat jar containing dependencies)
./gradlew :pkl-lsp:shadowJar
or
./gradlew shadowJar -x test
```

This should create:
`pkl-lsp/build/libs/pkl-lsp-all.jar`

## Step 3: Bundle VS Code Extension

Navigate to the `vscode` directory:

```bash
# Install dependencies
npm install

# Build the extension
# This script (updated in Phase 5) assumes `pkl-lsp` is a sibling directory.
# It copies `../pkl-lsp/build/libs/pkl-lsp-all.jar` to `./out/acore-lsp.jar`
npm run build

# Package into VSIX
npm run package
```

## Step 4: Install

You can now install the generated VSIX file in VS Code:

```bash
code --install-extension .dist/vscode/acore-vscode-0.1.0.vsix
```

## Troubleshooting

*   **JAR Not Found:** Check `package.json` script `build:copy-local-lsp`. Adjust the path if your directory structure differs.
*   **Version Mismatch:** Ensure `ts/consts.ts` `BUNDLED_LSP_VERSION` matches the version declared in `pkl-lsp/Release.properties` (or the `build.gradle` version).
*   **Java Error:** Ensure `acore.lsp.java.path` is configured if `java` is not in your PATH.
